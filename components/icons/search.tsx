import * as React from 'react'

function SvgComponent() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <path
        d="M21.756 20.607l-3.437-3.361-.081-.123a.809.809 0 00-1.137 0 8.113 8.113 0 01-10.519.34A7.679 7.679 0 014.876 7.31a8.075 8.075 0 0110.077-2.968 7.741 7.741 0 014.314 9.385.779.779 0 00.182.772.822.822 0 00.774.232.8.8 0 00.593-.54 9.334 9.334 0 00-5-11.25A9.754 9.754 0 003.689 6.085a9.256 9.256 0 001.36 12.195 9.789 9.789 0 0012.535.515l3.044 2.976a.819.819 0 001.137 0 .784.784 0 000-1.12z"
        fill="#200e32"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
