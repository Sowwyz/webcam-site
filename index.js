function startCamera() {
  const configs = {
    video: {
      facingMode: "user",
    },
  };
  /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 
  navigator.mediaDevices
    .getUserMedia(configs)
    .then((stream) => {
      const videoElement = document.querySelector("#camera");
      const videoElement2 = document.querySelector("#camera-2");
      videoElement.srcObject = stream;
      videoElement2.srcObject = stream;
      /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 
      videoElement.onloadedmetadata = (event) => {
        videoElement.play();
      };
      /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 
      videoElement2.onloadedmetadata = (event) => {
        videoElement2.play();
      };
    })
    .catch((error) => {
      console.log(error);
    });
}/// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 /// Sowwyz#1337 

window.addEventListener("DOMContentLoaded", startCamera());

/// Sowwyz#1337
/// Sowwyz#1337 
/// Sowwyz#1337 
/// Sowwyz#1337 
/// Sowwyz#1337 
/// Sowwyz#1337 
/// Sowwyz#1337 
/// Sowwyz#1337 

/// Sowwyz#1337 
/// Sowwyz#1337 
/// Sowwyz#1337 