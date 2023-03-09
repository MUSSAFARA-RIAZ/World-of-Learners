import React from 'react'

export default function Flower() {
  return (
   <>
   
    <div className="container my-4">
        <div className="row mb-2">
            <div className="col-md-6">
                <div
                    className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">Red Color</strong>
                        <h3 className="mb-0">ROSE</h3>
                        <p className="card-text mb-auto">The rose is a bulbous, fragrant flower that comes in many different varieties and colors, including red, white, pink, and yellow.</p>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img className="bd-placeholder-img" width="200" height="250"
                            src="Rose.jpg" alt=""onclick="play()"/>
                            <audio id="audio" src="roseaud.ogg"></audio>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div
                    className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-success">Yellow Color</strong>
                        <h3 className="mb-0">SUNFLOWER</h3>
                        <p className="mb-auto">A sunflower is a very tall plant with large yellow flowers. Oil from sunflower seeds is used in cooking and to make margarine.</p>
                                           </div>
                    <div className="col-auto d-none d-lg-block">
                        <img className="bd-placeholder-img" width="250" height="250"
                            src="sunflower.PNG" alt=""onclick="play()"/>
                            <audio id="audio" src="sunfloweraud.ogg"></audio>

                    </div>
                </div>
            </div>
        </div>
        <div className="row mb-2">
            <div className="col-md-6">
                <div
                    className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-danger">Purple Color</strong>
                        <h3 className="mb-0">LAVENDER</h3>
                        <p className="card-text mb-auto">Lavender is a garden plant with sweet-smelling, bluish-purple flowers and represent purity, silence, devotion, and serenity.</p>
                                     </div>
                    <div className="col-auto d-none d-lg-block">
                        <img className="bd-placeholder-img" width="200" height="250"
                            src="lavender.PNG" alt=""onclick="play()"/>
                            <audio id="audio" src="lavenderaud.ogg"></audio>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div
                    className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-warning">Pink Color</strong>
                        <h3 className="mb-0">TULIP</h3>
                        <p className="mb-auto">Tulips are brightly coloured flowers that grow in the spring, and have oval or pointed petals packed closely together.</p>
                                            </div>
                    <div className="col-auto d-none d-lg-block">
                        <img className="bd-placeholder-img" width="250" height="250"
                            src="Tulip.jpg" alt=""onclick="play()"/>
                            <audio id="audio" src="tulipaud.ogg"></audio>

                    </div>
                </div>
            </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-6">
              <div
                  className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                      <strong className="d-inline-block mb-2 text-danger">White Color</strong>
                      <h3 className="mb-0">DAISY</h3>
                      <p className="card-text mb-auto">A daisy is a small wild flower with a yellow centre and white petals. It is known as the sacred flower for the goddess of love, beauty and fertility.</p>
                                   </div>
                  <div className="col-auto d-none d-lg-block">
                      <img className="bd-placeholder-img" width="200" height="250"
                          src="daisy.png" alt=""onclick="play()"/>
                          <audio id="audio" src="daisyaud.ogg"></audio>

                                            </div>
              </div>
          </div>
          <div className="col-md-6">
              <div
                  className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                      <strong className="d-inline-block mb-2 text-warning">Blue Color</strong>
                      <h3 className="mb-0">BLUEBELL</h3>
                      <p classNameName="mb-auto">luebells are plants that have blue bell-shaped flowers on thin upright stems. It flowers symbolize gratitude and humility.</p>
                                          </div>
                  <div className="col-auto d-none d-lg-block">
                      <img className="bd-placeholder-img" width="250" height="250"
                          src="bluebell.jpg" alt="" onClick="play()"/>
                          <audio id="audio" src="bluebellaud.ogg"></audio>
                  
    </div>
    </div>
    </>
  )
}
