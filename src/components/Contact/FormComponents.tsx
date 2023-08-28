export function Loading() {
  return (
    <div className="w-full p-2 text-center">
      <div
        className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  )
}

export function Submitted() {
  return (
    <div className="w-full p-2 text-center text-green-500">
      <p>Thank you for your submission!</p>
    </div>
  )
}

export function Error() {
  return (
    <div className="w-full p-2 text-center text-red-500">
      <p>
        Oops! There was an issue submitting your request. Please refresh and try
        again.
      </p>
    </div>
  )
}
