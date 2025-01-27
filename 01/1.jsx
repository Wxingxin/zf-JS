root.render(
  <>
  <h2 className="title" style={styObj}>珠峰培训</h2>
  <div className="box">
    <span>{x}</span>
    <span>{y}</span>
  </div>
  {React.createElement('button', null, '按钮')}
  </>
)

React.createElement(
  React.Fragment,
  null,
  React.createElement(
    'h2',
    {className: 'title', style: styObj},
    '珠峰培训'
  ),
  React.createElement(
    'div',
    {className: 'box'},
    React.createElement(
      'span',
      null,
      x
    ),
    React.createElement(
      'span',
      null,
      y
    )
  )
)

console.log(
  React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'h2',
      {className: 'title', style: styObj},
      '珠峰培训'
    ),
    React.createElement(
      'div',
      {className: 'box'},
      React.createElement(
        'span',
        null,
        x
      ),
      React.createElement(
        'span',
        null,
        y
      )
    )
  )
)