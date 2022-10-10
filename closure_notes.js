function download(locationOfFile, errorHandler) {
  // try to download the file
  let gotError = true;
  let reasonCode = "Cannot reach server";
  if (gotError) {
    errorHandler(reasonCode);
  }
}

function errorDetected(url, reason) {
  // handle the error
  console.log(url, "!!!", reason);
}

let url = "https://example.com/foo.txt";
download(url, errorDetected.bind(null, url));
