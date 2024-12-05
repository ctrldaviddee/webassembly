/** the ultimate goal is to send the file to our rust program which will process 
the image and send it back to js. And lastly be present to the user 
*/

// ? Intercepting the file upload

async function init(){

    rustapp = null;

    try{
        rustapp = await import('../pkg');
    }catch(e){
        console.log(e);
        return;
    }

    console.log('rustapp');
    console.log(rustapp);

    const input = document.getElementById('upload');
    const fr = new FileReader();

    fr.onloadend = () => {
        let base64 = fr.result.replace(/^data:.+;base64,/, '');
        // let base64 = fr.result.replace(/^data:image\/(png|jpeg|jpg);base64,/, ');
        // console.log(input.files[0]);

        // console.log(base64);

        let img_data_url = rustapp.grayscale(base64);
        // browsers support base64 images
        document.getElementById('new-img').setAttribute('src', img_data_url); 
    }
    // listen to event on input
    input.addEventListener('change', () => { // the change event is fired whwnever the user has uploaded a file on the input element

        // File Reader is an official class defined by the browser it allows us to store files in js
        fr.readAsDataURL(input.files[0]);
    }); 
}

init();