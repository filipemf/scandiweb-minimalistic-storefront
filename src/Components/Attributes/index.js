import { PureComponent } from 'react';

//Global styles
import '../Navbar/pagesStyles.css'

//Page styles
import './index.css'


export class Attributes extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            attributes: this.props.attributes,
            id: this.props.id,
        }
        }



    render() {
            return(
                    <div className='attributes-preview'>
                            {
                                //Rendering all attributes inside products data stored in state
                                this.state.attributes.map((val, index)=>{
                                
                                    //Check if the attribute is Size for different way to render
                                    if(val.id==="Size"){
                                        return <>

                                        <h2 style={{}}>Size: </h2>
                                            {val.items.map((item)=> {
                                                //Map every option inside attribute
                                                return(
                                                        <>
                                                            <input type="radio" checked name={this.state.id+"-"+val.id} id={this.state.id+"-"+val.id+"-"+item.value} className='hiddenRadioBox' value={item.value} onClick={()=> console.log(item.value)}/>
                                                            <label for={this.state.id+"-"+val.id+"-"+item.value} className='size-label'>
                                                                <div className='size-value'>
                                                                    {item.displayValue}
                                                                </div>
                                                            </label>
                                                        </>
                                                        
                                                    )
                                            })
                                        }
                                        </>
                                        
                                        
                                    }
                                    
                                    //Check if attribute is Color to render the color swatches
                                    if(val.id=="Color"){
                                        console.log("é color")

                                        return <>

                                        <h2 style={{}}>Color: </h2>
                                        {val.items.map((item)=> {
                                            return(
                                                <>
                                                    <input type="radio" checked name={this.state.id+"-"+val.id} id={this.state.id+"-"+val.id+"-"+item.value} className='hiddenRadioBox' value={item.value} onClick={()=> console.log(item.value)}/>
                                                    <label style={{background: item.value}} for={this.state.id+"-"+val.id+"-"+item.value} className='color-label'>
                                                        <div className='color-value'>
                                                            {item.displayValue}
                                                        </div>
                                                    </label>
                                                    {/* <button className='size-item' >{item.displayValue}</button> */}
                                                </>
                                                
                                            )
                                        })
                                    }
                                        </>
                                    }
                                    
                                    
                                    //Every other attribute will be rendered this way as default
                                    else{
                                        return <>

                                        <h2 style={{}}>{val.id}: </h2>
                                        {val.items.map((item)=> {
                                        return(
                                            <>
                                                <input type="radio" checked name={this.state.id+"-"+val.id} id={this.state.id+"-"+val.id+"-"+item.value} className='hiddenRadioBox' value={item.value}/>
                                                <label for={this.state.id+"-"+val.id+"-"+item.value} className='size-label'>
                                                    <div className='size-value'>
                                                        {item.displayValue}
                                                    </div>
                                                </label>
                                                {/* <button className='size-item' >{item.displayValue}</button> */}
                                            </>
                                            
                                        )
                                        })
                                    }
                                    </>
                                    }
                                })
                            }
            
                        

                        
                    
    
                    </div>
            )
        }

}

export default Attributes;