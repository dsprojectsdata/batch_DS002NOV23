import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';

const TinyMCE = () => {

    const contentRef = useRef(null);

    
    const handleClick = () => {
        console.log(contentRef.current.getContent());
    }

    return (
        <>
            <Editor
                onInit={(evt, editor) => contentRef.current = editor}
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
                    ],
                }}
            />

            <button onClick={handleClick} type='button'>Click Me</button>
        </>
    )
}

export default TinyMCE