import React, { useState } from "react";
import Accordion from "./Accordion";
import DropDown from "./DropDown";
import Search from "./Search";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";


const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framwork'
    },
    {
        title: 'Why use React?',
        content: 'React is a favourite JS library amoung engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A shade of Blue',
        value: 'blue'
    }
]



export default () => {
    const [selected, setSelected] = useState(options[0])
    return (
        <div>
            <Header />
            <Route path='/'><Accordion items={items} /></Route>
            <Route path='/list'><Search /></Route>
            <Route path='/dropdown'><DropDown label='Select a Color' options={options} selected={selected} onSelectedChange={setSelected} /></Route>
            <Route path='/translate'><Translate /></Route>
        </div>
    )
}