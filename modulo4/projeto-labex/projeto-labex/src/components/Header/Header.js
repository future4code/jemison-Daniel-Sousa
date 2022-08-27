import React from "react";
import { IoIosStats, IoMdBatteryCharging, IoIosVolumeHigh } from "react-icons/io";
import { IoBluetoothSharp, IoMusicalNotes, IoWifiSharp } from "react-icons/io5";
import { Md3GMobiledata } from "react-icons/md";
import {MainHeader, } from "./Styled"



export function Header () {

        return (
                <MainHeader>
                        <section>
                            <span>10:40 AM</span>
                        </section>
                        <section>
                            <IoWifiSharp size={15}/>
                            <IoMusicalNotes />
                            <IoBluetoothSharp size={13} />
                            <IoIosVolumeHigh size={15}/>
                            <Md3GMobiledata size={15} />
                            <IoIosStats size={15}/>
                            <IoMdBatteryCharging size={15}/>
                        </section>
                        
                </MainHeader>
        )



}