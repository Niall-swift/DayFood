import { useState } from "react";
import { Content,InputImagem,InputName,InputSobre,ButtonSubmit } from "./About_Business"
import { GrEdit } from "react-icons/gr";
import { MdCloudUpload } from "react-icons/md";

export default function AboutBusiness() {
  const [selectImagem, setSelectImagem] = useState(null)
  const [image, setImage] = useState(null)



  /// previw da imagem
	function handleSelectImage(e) {
		if (e.target.files[0]) {
			const image = e.target.files[0];
			if (image.type === 'image/jpeg' || image.type === 'image/png' || image.type === 'image/webp') {
				setImage(image)
				setSelectImagem(URL.createObjectURL(image))
			} else {
				setSelectImagem(null)
				return;
			}
		}

	}



  return(
    <Content>
      <form>

        <InputImagem>
          <label>
          <input type="file"
          onChange={handleSelectImage}
          accept='image/*'
          />
          <img src={selectImagem} alt="'"/>
          <div id="lockup-headline-mask-path"><MdCloudUpload/><h4 dominant-baseline="hanging" text-anchor="middle" x="50%" y="0em" dy="0.125em" >selecione uma imagem</h4></div>
          </label>
          <span><GrEdit/></span>
        </InputImagem >

        <InputName>
          <label>Nome da empresa:</label>
          <input type="text"/>
        </InputName>

        <InputSobre>
          <label>sobre a empresa:</label>
          <textarea/>
        </InputSobre>

        <ButtonSubmit>
          <button>Salvar Alterações</button>
        </ButtonSubmit>

      </form>
    </Content>
  )
}