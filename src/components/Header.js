import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { requestVideos, toggleMenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';
import store from '../utils/store';
import { storeCache } from '../utils/searchResultsSlice';
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from '../utils/constants';

const Header = () => {

    const dispatch = useDispatch();
    const keyInCache = useSelector(store=>store.search);
    const [searchParameter, setSearchParameter] = useState("");
    const [showSuggestionsBox, setSuggestionsBox] = useState(false);
    const [suggestionsList, setSuggestionsList] = useState([])
    //console.log("SEARCH" + searchParameter);

    const toggleMenuHandler = () =>{
        dispatch(toggleMenu())
    }


    useEffect(()=>{
        let timer;
        if(keyInCache[searchParameter])
            {
                setSuggestionsList(keyInCache[searchParameter]);
            }
        else{
             timer = setTimeout(()=>{getSearchResults()},200);
        }

        return ()=>{
            clearTimeout(timer);
        }
            
    }, [searchParameter])

    const getSearchResults = async () =>{
        const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API+searchParameter);
        const json = await data.json();       
        setSuggestionsList(json[1])
        dispatch(storeCache({
            [searchParameter] : json[1]
        }))
        //setSuggestionsBox(true);

    }

    const changeSearchParameter = (s) =>{
        //alert("ABC");
        //console.log(s);
        setSearchParameter(s);
        setSuggestionsBox(false);
    }

    const closeSuggestionsBox = () =>{
        setTimeout(()=>{setSuggestionsBox(false)},100);
    }
    
    return( 

    <div className=' grid grid-flow-col shadow-md'>
        <div className='flex col-span-1 p-2'>
          <img onClick={()=>toggleMenuHandler()} className='rounded-full h-11 mx-2 p-1 hover:bg-gray-300 hover: cursor-pointer ' alt="hamburger_icon" src='https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png'/>  
           
           <img className='h-12' alt="utube_logo" src="data:image/png;base64,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"/>
           
        </div>

        <div className='col-span-10 text-center p-2 place-content-center'>
            <input className='h-10 border border-gray-300 text-lg w-1/2 rounded-l-full p-2' type='text' placeholder='Search' value={searchParameter} onChange={(e)=>{setSearchParameter(e.target.value)}} onFocus={()=>{setSuggestionsBox(true)}} onBlur={()=> {closeSuggestionsBox() }} />
            <button className='h-10  border border-gray-300 w-14 rounded-r-full  hover:cursor-pointer bg-gray-200 hover:bg-gray-300 '>🔍</button>
            <div className='absolute text-left bg-white w-[35rem] left-[31rem] border border-t-white border-gray-200 rounded-xl'>
                <ul className='rounded-2xl hover:rounded-2xl'>
                    
                    { showSuggestionsBox && suggestionsList.map((s) => <li onClick={()=>{dispatch(requestVideos(s));setSearchParameter("")}} key={s} className='p-2 hover:bg-gray-200 hover:cursor-pointer'>{s}</li> )  }
                </ul>
            </div>
          </div>

        <div className='col-span-1 flex justify-end'>

        <img className='h-12 p-1 mr-4' alt='userlogo' src='data:image/png;base64,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'/>


        </div>
    </div>
    
)

}

export default Header;