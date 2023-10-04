const express = require("express");
const { notes } = require("../controllers/notes");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

const notesRouter = express.Router();
notesRouter.post("/", authentication, notes.AddNote);
notesRouter.get("/byProvider/", authentication, notes.GetNotebyProviderId);
notesRouter.delete("/:id", authentication, notes.DeleteNote);
notesRouter.put("/:id", authentication, notes.UpdateNote);

module.exports = notesRouter;
