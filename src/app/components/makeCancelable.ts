export interface CancellablePromise<T> extends Promise<T> {
  cancel: () => void
}

export function makeCancelable<T>(promise: Promise<T>): CancellablePromise<T> {
  let hasCanceled = false;
  const cancellablePromise: Partial<CancellablePromise<T>> = new Promise((resolve, reject) => {
    promise.then(
      val => hasCanceled ? reject({isCanceled: true}) : resolve(val),
      error => hasCanceled ? reject({isCanceled: true}) : reject(error)
    );
  });
  cancellablePromise.cancel = () => hasCanceled = true;
  return cancellablePromise as CancellablePromise<T>
}