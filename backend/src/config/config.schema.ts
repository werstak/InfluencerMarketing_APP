import * as Joi from 'joi';

export const configSchema = Joi.object({
    AUTH_KEY: Joi.string().required(),
});
