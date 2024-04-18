import React from 'react'

function Background() {
  return (
    <div className="container">
		<video className="video-background" autoPlay loop muted>
			<source src="sample.mp4" type="video/mp4"/>
			Your browser does not support the video tag.
		</video>
	</div>
	
  )
}

export default Background