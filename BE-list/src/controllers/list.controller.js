const { sendResponse } = require("../utils/response");
const List = require("../models/list.model");
const CONSTANTS = require("../utils/constant");
const createList = async (req, res) => {
  try {
    if (!req.body.name) {
      return sendResponse(res, 400, null, null, "Please enter the name");
    }
    const item = await List.create(req.body);
    const list = await List.find({}).sort({ createdAt: -1 });
    return sendResponse(res, 200, { list }, CONSTANTS.LIST_CREATED_SUCCESSFULLY);
  } catch (error) {
   
    return sendResponse(res, 500, null, null, error.message);
  }
};

const getList = async (req, res) => {
  try {
    const list = await List.find({}).sort({ createdAt: -1 });

    return sendResponse(
      res,
      200,
      { list },
      CONSTANTS.LIST_FETCHED_SUCCESSFULLY
    );
  } catch (error) {
    return sendResponse(res, 500, null, null, error.message);
  }
};

module.exports = {
  createList,
  getList,
};
