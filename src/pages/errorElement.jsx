const ErrorElement = () => {
  return (
    <div className="error-page">
      {/* <LazyLoadImage src='/img/logos/r/android-chrome-192x192.png' effect='opacity' alt='Rifaldi Logo'/> */}
      <h1>{'Oopss... Something when wrong :('}</h1>
      <p>We apologize for the inconvencience, we will fix this ASAP.</p>
      <p>Failed Load Resource</p>
      {/* <div className="bar-loader"></div> */}
    </div>
  )
}

export default ErrorElement
