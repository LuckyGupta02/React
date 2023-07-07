import React from "react";

function Header(){
    
    const data =["3 Nahni Trap", "5 layer 1000 liter water tank", "Ball Valve 25MM Box 10 UPVC", "Ball Valve 40MM Box 3 UPVC", "Bearing 30210","Bearing 30305","Bearing 30307","Bearing 30308","Bearing 32209", "Bearing 32209 NBC", "Bearing 32210 CBS", "Bearing 32210 NBC", "Bearing 32211 CBS", "Bearing 32211 NBC", "Bearing 32212", "Bearing 32212 NBC", "Bearing 32213 NBC", "Bearing 32214", "Bearing 32214 NBC", "Bearing 32308", "Bearing 32310", "BEARING 51113", "Bearing 51313 CBS", "Bearing 51314 CBS", "Bearing 51315", "Bearing 6004 RS HCH", "Bearing 6007", "Bearing 6012ZZ", "Bearing 6013 NBU", "Bearing 6201Z NBC", "Bearing 6202Z NBC", "Bearing 6203 ZZ", "Bearing 6203Z NBC", "Bearing 6204Z NBC", "Bearing 6204ZZ", "Bearing 6205Z NBC", "Bearing 6205ZZ MPZ", "Bearing 6206 NBC", "Bearing 6206ZZ", "Bearing Ls8", "Bearing MAHK 22211 MBK", "Bearing MAHK 22212 MBK", "Bearing MS 13 NBC", "Bearing MS10 NBC", "Bearing MS11 NBC", "Bearing MS11.5 NBC", "Bearing MS12 NBC", "Bearing MS14 NBC", "Bearing N210", "Bearing NBC - 539/ 532X", "Bearing NBC 6206Z", "Bearing Round Goli", "Bearing Sleave 1208S", "Bearing Sleave 1210K/s", "Bearing Sleave 1211S", "Bearing Sleave 1213S", "Bearing Sleeve 1206k", "Bearing Sleeve 1206S", "Bearing Sleeve 1208k", "Bearing Sleeve 1209S", "Bearing Sleeve 1210K", "Bearing Sleeve 1211k", "Bearing Sleeve 1212S", "Bearing Sleeve 1213k/s", "Bend 4 RingType 87.5 Deg Box 35 SWR", "Bend 160MM 6 Ring Type 87.5 Deg Box 12 SWR", "Bend 4 45 Deg Pasting Type SWR", "Bend 75MM 3 Ring Type 87.5 Deg Box 70 SWR", "Bitumen Belt Paste 1 Kg 2713",  "Rigid Agri Pipe 40MM 6Kg/cm2 3M", "Rigid Agri Pipe 50MM 6kg/cm2 3M", "Single TEE Ring Type 110MM 4 Box 25 SWR", "Single TEE W Door Ring Type 110MM 4 Box 20 SWR", "Step Over Bend 25mm CPVC", "Swept Tee Ring Type 160MM 6 Box 6 SWR", "SWR 3 75 MM Ringtype A 3M Single Socket", "SWR 4 110 MM Ringtype A 3M Single Socket", "Tank Connector 25MM Box 50 UPVC", "Tank Connector 25mm Pk 25 CPVC", "TEE 25MM PK 25 CPVC", "TEE 32mm UPVC (100)", "Tee 50MM Rigid Agri PVC", "UCP 205-16 FKD", "UCP 205/16 HGMT", "UCP 206 FKD", "UCP 208-24 DWZY", "UCP 208/24 HGMT", "UCP 211 FKD", "UCT 210 FKD", "Union 25MM Box 100 UPVC", "Union 25MM PK 25 CPVC", "UPVC 15 mm SCH-40 3 M Pack 50", "UPVC 20MM SCH-40 3M Pack 25", "UPVC 25 mm SCH-40 3 M Pack 25", "UPVC 32 MM SCH-40 3 M Pack 15"]


    return(
        <div className="ui fixed menu"style={{height:"130px"}}>
             <div className="ui container center" >
            <div  style={{width : 390 + "px",fontSize : "small",float : "left" }}>
            <table>
                <tr>
                    <td className="sales">Sales_Manual</td>
                    <td></td>
                    <td>No. <input className="input" type="number"></input></td>
                </tr>
                <tr><br></br></tr>
                <tr>
                    <td >Party A/c name</td>
                    <td>:</td>
                    <td className="name">Online Transfer Customer</td>
                </tr>
                <tr>
                    <td className="balance">Current balance</td>
                    <td>:</td>
                    <td className="balance">30,72,124.97 Dr</td>
                </tr>
                <tr>
                    <td>Sales ledger</td>
                    <td>:</td>
                    <td className="name">GST Sales</td>
                </tr>
                <tr>
                    <td className="balance">Current balance</td>
                    <td>:</td>
                    <td className="balance">82,71,260.99 Cr</td>
                </tr>
            </table>
            </div>

            <div style={{marginLeft : "100px",paddingTop : "30px",float : "left"}}>
                <table>
                    <tr>
                        <td className="balance">Voucher Class </td>
                        <td>
                            :
                        </td>
                        <td style={{color : "grey", fontWeight:"normal"}}>Sales</td>
                    </tr>
                </table>
            </div>

            <div style={{marginLeft : "50px",paddingTop : "50px",float : "left"}}>
                <table>
                    <tr>
                        <td>Price level</td>
                        <td>
                            :
                        </td>
                        <td></td>
                    </tr>
                </table>
            </div>

            <div style={{marginLeft : "20px",paddingTop : "80px",float : "left"}}>
                <label>List of Stock items : </label>
            <input list="data"  placeholder="Search" />
               
                <datalist id="data">
                    {data.map((op)=><option>{op}</option>)}
                </datalist>
                
               
            </div>

            <div style={{textAlign : "right"}}>
                <h5>5-july-2023<br></br>
                Wednesday

                </h5>
                
            </div>
            </div>
        </div>
        
        
    );
};

export default Header;