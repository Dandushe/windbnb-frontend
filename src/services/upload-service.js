export const uploadImg = async (files) => {
    // Defining our variables
    const CLOUD_NAME = 'dwnu4ghut'
    const UPLOAD_PRESET = 'u7ndzb6e'
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
    const FORM_DATA = new FormData();
    // Building the request body
    FORM_DATA.append('file', files[0])
    FORM_DATA.append('upload_preset', UPLOAD_PRESET)
    FORM_DATA.append('folder', 'windbnb')
    // Sending a post method request to Cloudniarys' API
    try {
        const res = await fetch(UPLOAD_URL, {
            method: 'POST',
            body: FORM_DATA
        })
        const { url } = await res.json()
        return url
    } catch (err) {
        console.error('ERROR!', err)
    }
}
