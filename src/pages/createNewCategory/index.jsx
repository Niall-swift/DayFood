import { Link } from 'react-router-dom'
import { useState } from 'react'
//--Swal
import Swal from 'sweetalert2'
//--styles
import { Content, Conteiner, Text, Form, SelecIcon} from './newcategory-styles'
//--API
import UseAPIClient from '../../api/api'
// icons 
import bacon from '../../utils/icons/bacon-solid.svg'
import bowl from '../../utils/icons/bowl-food-solid.svg'
import burger from '../../utils/icons/burger-solid.svg'
import pizza from '../../utils/icons/pizza-slice-solid.svg'
import utensils from '../../utils/icons/utensils-solid.svg'
import hotdog from '../../utils/icons/hotdog-solid.svg'
import martini from '../../utils/icons/martini-glass-citrus-solid.svg'
import ice from '../../utils/icons/ice-cream-solid.svg'
import drumstick from '../../utils/icons/drumstick-bite-solid.svg'
import cookie from '../../utils/icons/cookie-solid.svg'
import candy from '../../utils/icons/candy-cane-solid.svg'
import water from '../../utils/icons/bottle-water-solid.svg'

export default function NewCategory() {
    const api = UseAPIClient();

    const [name , setName] = useState('')
    const [icon, setIcon] = useState('')

    const icons = [bacon,bowl,burger,pizza,utensils,hotdog,martini,ice,drumstick,cookie,candy,water]


    // quando um icon e selecionado 
    function handleSelectIcon(e){
        setIcon(e.target.value)
    }

    // cadastrando categoria
    async function RegisteCategory(e){
        e.preventDefault()

        if(name !== ''){
            try{
                const response = await api.post('/category',{
                    name,
                    order:"",
                    icon
                })
                setName('')
                Swal.fire({
                    icon: 'success',
                    title: `A categoria`   `${name}`   `foi criadar com sucesso`,
                    html: '😁',
                    position: 'center',
                    showConfirmButton: false,
                    timer: 5000,
                    background: `var(--color-background)`,
                    color: `var(--color-primary)`,
                })
            }catch(err){
                console.log(err)
            }
        }else{
            Swal.fire({
                icon: 'error',
                title: `A categoria deve ter um nome`,
                html: '🙄',
                position: 'center',
                showConfirmButton: false,
                timer: 5000,
                background: `var(--color-background)`,
                color: `var(--color-primary)`,
            })
        }
    }


    return (
        <Content>

            <Link to='/Home'>
                <div className='btn-voltar'>
                    <button>Voltar</button>
                </div>
            </Link>

            <Conteiner>

                <Text><h1>Cria Categoria</h1></Text>

                <Form>
                    <form>

                    <SelecIcon>
                        {icons.map((item, index)=>{
                            return(
                            <label key={index}>
                            <input
                            type='radio'
                            value={item}
                            placeholder='card'
                            onChange={handleSelectIcon}
                            checked={icon === item}
                            />
                            <img src={item} alt=''/>
                        </label>
                            )
                        })}
                    </SelecIcon>



                        <label>Nome da categoria</label>
                        <input
                        onChange={((e)=> setName(e.target.value))}
                        value={name}
                        type='text'
                        placeholder='Ex: Pizza'
                        />
                        <button onClick={RegisteCategory}>Criar</button>
                    </form>
                </Form>

            </Conteiner>

            <Conteiner>
                <div><h1>Suas Categorias</h1></div>

            </Conteiner>

        </Content>
    )
}