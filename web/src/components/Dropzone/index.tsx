import React, { useCallback, useState } from 'react';
import { useDropzone, DropzoneOptions } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';

import './style.css';

interface Props {
  onFileUploaded: (file: File) => void;
}

const  Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];

    const fileUrl = URL.createObjectURL(file);

    setSelectedFileUrl(fileUrl);
    onFileUploaded(file);
  }, [onFileUploaded]);

  const configDrop = {
    onDrop,
    accept: 'image/*',
  } as DropzoneOptions;

  const { getRootProps, getInputProps } = useDropzone(configDrop);

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      
      { selectedFileUrl 
          ? <img src={selectedFileUrl} alt="Point thumbnail" />
          : (
            <p>
              <FiUpload />
              Imagem do estabelecimento
            </p>
          )
      }   
    </div>
  );
};

export default Dropzone;