const router = require('express').Router();
const passport = require('passport');


router.get("/login/success", (req, res) => {
    if(req.user){
        res.status(200).json({
            ok: true,
            error: false,
            message: "User has successfully authenticated",
            user: req.user,
        });
    }else{
        res.status(403).json({
            ok: false,
            error: true,
            message: "User has not authenticated",
        });
    }
});

router.get("/login/failed", (req, res) => {
    res.status(401).json({
        error: rue,
        message: "Failed to login",
    });

});

router.get("/google", passport.authenticate("google", ["profile", "email"],));

router.get("/google/callback", 
    passport.authenticate("google", {
        successRedirect: process.env.CLIENT_URL || "/",
        failureRedirect: "/login/failed",
    }) 
);



router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(process.env.CLIENT_URL);
});

module.exports = router;