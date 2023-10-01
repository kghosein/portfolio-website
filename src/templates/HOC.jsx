export const MainHOC = (WrapperComponent) => {

  return (props) => (
    <div className="content-wrapper">
      <div className="inner-container">
        <main className="main">
          <WrapperComponent {...props} />
        </main>
      </div>
    </div>
  )
}

export const FlexHOC = (WrapperComponent) => {

  return (props) => (
    <div className="flex-hoc">
      <WrapperComponent {...props} />
    </div>
  )
}
