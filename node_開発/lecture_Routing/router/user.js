var router = require("express").Router();

router.use((req, res, next) => {
    console.log((new Date()).toISOString());
    next();
})

// app.jsの側で/user以下の配下で適用させているので、
// 実際のURLは/user/になる
router.get("/", (req, res) => {
    res.send("/");
});

// app.jsの側で/user以下の配下で適用させているので、
// 実際のURLは/user/aboutになる
router.get("/about", (req, res) => {
    res.send("/about");
});

module.exports = router