module.exports = app => {

    const userModel = require('../models/user/user.model.server');

    // creates a new user in the mongo database and logs them in
    register = (req, res) =>  {
        const username = req.body.username;
        const password = req.body.password;
        const newUser = {
            username: username,
            password: password
        };
        userModel
            .findUserByUsername(username)
            .then(function (user) {
                if(!user) {
                    return userModel
                        .createUser(newUser)}})
            .then(function (user) {
                req.session['currentUser'] = user;
                res.send(user);
            });
    };

    // finds the user in the mongo database and logs them in
    login = (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        userModel.findUserByCredentials(username, password)
            .then(user => {
                if (user) {
                    req.session['currentUser'] = user;
                    res.send(user);
                } else {
                    res.send(0);
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

    findUserById = (req, res) =>
        const id = req.params['userId'];
        userModel.findUserById(id)
            .then(user => {
                res.json(user);
            })


    currentUser = (req, res) => {
        const currentUser = req.session['currentUser'];
        if(currentUser) {
            userModel.findUserByIdExpanded(currentUser._id)
                .then(user => res.send(user))
        } else {
            res.sendStatus(403)
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
        if (user !== null) {

            const name = req.params['name'];
            req.session[name] = req.params['value'];
            res.send(req.session);

            req.session[name] = currentUser.username;
            updateUser(currentUser._id, req.user)

        } else {
            return null;
        }
    };

    // removes the profile of the currently logged in user
    deleteProfile = (req, res) => {

    };

    app.post  ('/api/register', register);
    app.post  ('/api/login',    login);
    app.post  ('/api/logout',   logout);
    app.get   ('/api/user',     findAllUsers);
    app.get   ('/api/currentUser', currentUser);
    app.get   ('/api/profile', profile);
    app.put   ('/api/profile', updateProfile);
    app.delete('/api/profile', deleteProfile);
};
