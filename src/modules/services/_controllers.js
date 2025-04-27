const express = require("express");
const httpValidator = require("../../shared/http-validator");
const {
  addServicesSchema,
  patchServicesSchema,
  allServicesSchema,
} = require("./_schemas");
const addServicesService = require("./add");
const editServicesService = require("./edit");
const showServicesService = require("./show");
const removeServicesService = require("./remove");
const allServicesService = require("./all");
const { UnauthorizedError } = require("../../shared/errors");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const addServices = async (req, res, next) => {
  try {
    console.log(req.file, "file");

    httpValidator({ body: req.body }, addServicesSchema);

    const result = await addServicesService(req);

    console.log(result, "result");

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return res.status(403).json({
        message: "Forbidden",
      });
    }
    console.log(error);
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const patchServices = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, patchServicesSchema);
    if (req?.file) {
      let SITE_URL = process.env.SITE_URL;
      let image = `${SITE_URL}/${req.file.filename}`;
      console.log(`${SITE_URL}/${req.file.filename}`);
      // Only pass the necessary data from req.body
      req.body.image = image;
    }
    const result = await editServicesService({
      id: req.params.id,
      changes: { ...req.body }, // Include image in the changes
    });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const showServices = async (req, res, next) => {
  try {
    const result = await showServicesService({ id: req.params.id });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const getServices = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, allServicesSchema);

    const { query } = req;
    const offset =
      query && query.page && query.page.offset
        ? parseInt(query.page.offset)
        : undefined;
    const limit =
      query && query.page && query.page.limit
        ? parseInt(query.page.limit)
        : undefined;

    const result = await allServicesService({
      q: query.q, // Pass search query
      sort: query.sort,
      page: { limit, offset },
      is_visible: query.is_visible,
      view: query.view,
      categoryId: query.categoryId, // Pass categoryId to service
    });

    res.status(200).json({
      data: result.services,
      pageInfo: {
        total: result.total,
        offset: result.offset,
        limit: result.limit,
      },
    });
  } catch (error) {
    next(error);
  }
};


/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const deleteServices = async (req, res, next) => {
  try {
    const result = await removeServicesService({ id: req.params.id });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addServices,
  patchServices,
  showServices,
  deleteServices,
  getServices,
};
