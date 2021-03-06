module.exports = app => {

    const userModel = require('../models/user/user.model.server');

    // creates a new user in the mongo database and logs them in
    register = (req, res) =>  {
        const givenUser = req.body;
        const newUser = {
            username: givenUser.username,
            password: givenUser.password,
            firstName: givenUser.firstName,
            lastName: givenUser.lastName,
            email: givenUser.email
        };
        userModel
            .findUserByUsername(newUser.username)
            .then((user) => {
                if(!user) {
                    userModel.createUser(newUser)
                } else {
                    // 404 not acceptable
                    return res.sendStatus(406);
                }
            })
            .then((user) =>  {
                req.session['currentUser'] = user;
                res.send(req.session['currentUser']);
            });
    };

    // finds the user in the mongo database and logs them in
    login = (req, res) => {
        console.log("here");
        const username = req.body.username;
        const password = req.body.password;
        userModel.findUserByCredentials(username, password)
            .then(user => {
                if (user) {
                    req.session['currentUser'] = user;
                    res.send(user);
                } else {
                    // 404 not found
                    return res.sendStatus(404);
                }
            });
    };

    // logs out the currently logged in user
    logout = (req, res) => {
        req.session.destroy();
        res.send(200);
    };

    findAllUsers = (req, res) =>
        userModel.findAllUsers()
            .then(users => {
                res.send(users);
            });

    findUserById = (req, res) => {
        const id = req.params['userId'];
        userModel.findUserById(id)
            .then(user => {
                res.json(user);
            })
    };


    currentUser = (req, res) => {
        const currentUser = req.session['currentUser'];
        if(currentUser) {
            userModel.findUserById(currentUser._id)
                .then(user => {
                    return res.send(user)
                });
        } else {
            return res.sendStatus(403);
        }
    };

    // retrieves the profile of the currently logged in user
    profile = (req, res) => {
        const currentUser = req.session['currentUser'];
        userModel.findUserById(currentUser._id)
            .then(user => {
                res.json(user);
            })
    };

    // updates the profile of the currently logged in user
    updateProfile = (req, res) => {
        const currentUser = req.session['currentUser'];
        const givenUser = req.body;
        userModel.updateUser(currentUser._id, givenUser)
                .then(user => res.json(user));
    };

    // removes the profile of the currently logged in user
    deleteProfile = (req, res) => {
        const currentUser = req.session['currentUser'];
        userModel.deleteUser(currentUser)
            .then(() => res.send(200));
    };

    app.post  ('/api/user',     register);
    app.post  ('/api/login',    login);
    app.post  ('/api/logout',   logout);
    app.get   ('/api/user',     findAllUsers);
    app.get   ('/api/currentUser', currentUser);
    app.get   ('/api/profile', profile);
    app.put   ('/api/profile', updateProfile);
    app.delete('/api/profile', deleteProfile);
};
