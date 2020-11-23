const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/fetch-api", (req, res) => {
  res.render("fetch-api");
});

router.get("/interactive-form", (req, res) => {
  res.render("interactive-form");
});

router.get("/pagination-filter", (req, res) => {
  res.render("pagination-filter");
});

router.get("/quote-gen", (req, res) => {
  res.render("quote-gen");
});

router.get("/tic-tac", (req, res) => {
  res.render("tic-tac");
});

router.get("/vsi-project", (req, res) => {
  res.render("vsi-project");
});

router.get("/api-vue", (req, res) => {
  res.render("api-vue");
});

router.get("/block-buster", (req, res) => {
  res.render("block-buster");
});

router.get("/vue-localstorage", (req, res) => {
  res.render("vue-localStorage");
});

router.get("/api-vue-firebase", (req, res) => {
  res.render("api-auth-vue-firebase");
});

router.get("/api-countries", (req, res) => {
  res.render("api-countries");
});
module.exports = router;
