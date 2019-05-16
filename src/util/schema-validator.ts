import ajv from 'ajv';

const ajv_ = new ajv();

export function schemaValidator(schema: Object | boolean, json: any) : Array<ValidationError> | boolean {
  const validate = ajv_.compile(schema);
  const isValid = validate(json);
  if (!isValid && validate.errors) {
    return validate.errors.map(e => {
      return {
        params: e.params,
        message: e.message,
      };
    });
  }
  return <boolean>isValid;
}

type ValidationError = {
  params: ajv.ErrorParameters,
  message?: string,
}