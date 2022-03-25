import './App.css';
import Header from "./components/Header";
import {useState, useEffect} from "react";
import axios from "axios";
import PunkList from "./components/PunkList";
import Main from "./components/Main";

function App() {
    const [punkListData, setPunkListData] = useState([])
    const [selectedPunk, setSelectedPunk] = useState(0)
    const [contractAddress, setContractAddress] = useState('0xA3a8FccB2F8beb5bBd72c792637d3c319F24558c')

    useEffect(() => {
        const getMyNfts = async () => {
            const openseaData = await axios.get(
                'https://testnets-api.opensea.io/assets?asset_contract_address='
                + contractAddress
                + '&order_direction=asc'
            ).catch((error) => {
                if (error.response)
                {
                    if (!(error.response.status).toString().startsWith('4'))
                    {
                        throw error
                    }
                }
            })
            if (openseaData)
            {
                setPunkListData(openseaData.data.assets)
            }
        }
        return getMyNfts()
    }, [contractAddress])
    return (
        <div className='app'>
            <Header setContractAddress={setContractAddress}/>
            {punkListData.length > 0 && (
                <>
                    <Main selectedPunk={selectedPunk} punkListData={punkListData}/>
                    <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk}/>
                </>
            )}
        </div>
    );
}

export default App;
