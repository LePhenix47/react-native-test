/**
 *Delays the execution of a function by the specified number of milliseconds.
 *
 *@param {number} milliseconds - The number of milliseconds to wait before resolving the promise.
 *@returns {Promise<unknown>} A promise that resolves after the specified number of milliseconds have passed.
 */
export function waitPromiseSuccess(
  milliseconds: number,
  dataToResolve: any = null
): Promise<any> {
  return new Promise((resolve) => {
    return setTimeout(() => {
      resolve(dataToResolve);
    }, milliseconds);
  });
}

/**
 * Waits for a specified number of seconds and then returns a rejected promise with a specified error message.
 * @param {number} milliseconds - The number of milliseconds to wait before rejecting the promise.
 * @param {any} errorMessage - The error message to include in the rejection reason.
 * @returns {Promise<unknown>} A promise that rejects after the specified number of seconds have passed.
 */
export function waitPromiseError(
  milliseconds: number,
  errorMessage: any
): Promise<unknown> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(errorMessage);
    }, milliseconds);
  });
}
