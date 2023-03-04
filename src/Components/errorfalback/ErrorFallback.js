import './ErrorFallback.css';

function ErrorFallback({error}) {
    const resetErrorBoundary = ()=>{
        window.location.href = '/'
    }
    return (
      <div role="alert" className='not-found'>
        <div className='err404'>Oops!</div>
        <div className='err-msg'>Error: <span>{error?.message}</span></div>
        <div><button className="err-btn" onClick={resetErrorBoundary}>RETURN HOME</button></div>       
      </div>
    )
  }
  
  export default ErrorFallback;