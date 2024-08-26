'use client'

import classes from './image-picker.module.css'
import {useRef, useState} from "react";
import Image from "next/image";

type ImagePickerProps = {
    label:string
    name:string
}

export default function ImagePicker({label, name}:ImagePickerProps) {
    const imageRef = useRef<HTMLImageElement>(null);
    const [pickedImage, setPickedImage] = useState()
    function handleImageClick() {
        imageRef.current.click()
    }

    function handleImageChange(event:any) {
        const file = event.target.files[0];
        if(!file) {
            return
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }

        fileReader.readAsDataURL(file);
    }

    return (
        <div className={classes.picker}>
            <label htmlFor="image">
                {label}
            </label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked yet.</p>}
                    {pickedImage && <Image src={pickedImage} alt="selected image" fill /> }
                </div>
                <input onChange={handleImageChange} ref={imageRef} className={classes.input}  type="file" id="image" accept="image/png, image/jpeg" name={name} />
                <button className={classes.button} type="button" onClick={handleImageClick}>Pick an Image</button>
            </div>
        </div>
    )
}