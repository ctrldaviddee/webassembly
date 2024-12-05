

// FIXME This is a test
// pub fn add(left: u64, right: u64) -> u64 {
//     left + right
// }

// #[cfg(test)]
// mod tests {
//     use super::*;

//     #[test]
//     fn it_works() {
//         let result = add(2, 2);
//         assert_eq!(result, 4);
//     }
// }

// web-sys: exports js functions defined by the browser

use wasm_bindgen::prelude::*;
use web_sys::console::log_1 as log;
use base64::{encode, decode};
use image::load_from_memory;
use image::ImageOutputFormat::Png;

#[wasm_bindgen]
pub fn grayscale(encoded_file: &str) -> String{
    log(&"Grayscale Called".into());

    let base64_to_vector = decode(encoded_file).unwrap();
    log(&"Image Deoded".into());

   let mut image = load_from_memory(&base64_to_vector).unwrap();
   log(&"Image loaded".into());

   image = image.grayscale();

   log(&"Grayscale effect applied".into());

   let mut buf = vec![];
//    initiate the process of converting an image into binary data
   image.write_to(&mut buf, Png).unwrap();
   
   log(&"New Image written".into());

   let encoded_image = encode(&buf);

   let data_url = format!("data:image/png;base64,{}", encoded_image);

   return data_url;
}