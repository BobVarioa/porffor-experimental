export default () => {
  let out = '';

  const error = name => out += `export const ${name} = function (message: bytestring) {
  const error: ${name} = message ?? Porffor.allocate();
  return error;
};

export const __${name}_prototype_message$get = (_this: ${name}) => {
  Porffor.wasm\`
    ;; cast self to bytestring
    local.get \${_this}
    i32.const 195
    return
  \`;
};

export const __${name}_prototype_name$get = (_this: ${name}) => {
  const name: bytestring = '${name}'
  return name;
};

export const __${name}_prototype_toString = (_this: ${name}) => {
  const colon: bytestring = ': ';
  return _this.name + colon + _this.message;
};`;

  error('Error');
  error('AggregateError');
  error('TypeError');
  error('ReferenceError');
  error('SyntaxError');
  error('RangeError');
  error('EvalError');
  error('URIError');

  return out;
};