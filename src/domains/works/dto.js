import Joi from "joi";

export const createWorksDto = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().required(),
  url: Joi.string().required(),
  company_name: Joi.string().required(),
  tag: Joi.array().required(),
});

export const updateWorksDto = Joi.object({
  title: Joi.string().optional(),
  description: Joi.string().optional(),
  image: Joi.string().optional(),
  url: Joi.string().optional(),
  company_name: Joi.string().optional(),
  tag: Joi.array().optional(),
});
