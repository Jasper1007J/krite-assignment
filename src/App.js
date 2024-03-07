import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';
import DashBoard from './Dashboard';
import NavBar from './Navbar';
import Sidenav from './Sidenav';

function App() {
 
  return (
    <div className="App">
     <div className='sidenav'>
      <Sidenav />
     </div>
      <div className='main'>
      <header>
        {/* <nav>
          <div className='navbar'>
            <div><a href="#">Products</a></div>
            <div><input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchChange} /></div>
          </div>
        </nav> */}
        <NavBar/>
      </header>
      <div className='mini-nav'>
      <div className='header'>
          <NavLink className='brands'>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABbUlEQVR4nO3WwQkAIRTEUPtvOtvEBiPMg3/P4MVzZmZmZmZmZmZmZmbyuHSv9Ohqg4n16GqDifXoaoOJ9ehqg4n16GqDifXo7CB+eoBbPbraYGI9utpgYj262mBiPbraYGI9utpgYj262mBiPbraYGI9utpgYj262mBiPbraYGI9utpgYj262mBiPbraYGI9utpgYj262mBiPbraYGI9utpgYj06Lt0rPbraYGI9utpgYj262mBiPbraYGI9utpgYj0zMzMzo6h9+4j16GqDifXoaoOJ9ehqg4n16GqDifXoaoOJ9ejsIH56gFs9utpgYj262mBiPbraYGI9utpgYj262mBiPbraYGI9utpgYj262mBiPbraYGI9utpgYj262mBiPbraYGI9utpgYj262mBiPbraYGI9utpgYj262mBiPTou3Ss9utpgYj262mBiPbraYGI9utpgYj262mBiPTMzMzMzMzMzMzMzJ+ADWpH3eYKz8fEAAAAASUVORK5CYII=" alt='brands'></img>
          All Brands
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZklEQVR4nO2RQQ6AIAwEh5fxnB79itx4rTUmcDGIoiVeOufNTAngOM6vBCA+2MWyHZYnYAOWzk7KJo9GjvEKaCdS5fomcBeRr/JeRKzk5//QIq7yZCFvvcTs8qtIniGvhJlyx6HJDg+fH94Sm7UyAAAAAElFTkSuQmCC" alt='arrow'/>            

          </NavLink>
          <NavLink className='desk'>
          Desks
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZklEQVR4nO2RQQ6AIAwEh5fxnB79itx4rTUmcDGIoiVeOufNTAngOM6vBCA+2MWyHZYnYAOWzk7KJo9GjvEKaCdS5fomcBeRr/JeRKzk5//QIq7yZCFvvcTs8qtIniGvhJlyx6HJDg+fH94Sm7UyAAAAAElFTkSuQmCC" alt='arrow'/>            
          </NavLink>
          <NavLink className='tags'>
            tags
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZklEQVR4nO2RQQ6AIAwEh5fxnB79itx4rTUmcDGIoiVeOufNTAngOM6vBCA+2MWyHZYnYAOWzk7KJo9GjvEKaCdS5fomcBeRr/JeRKzk5//QIq7yZCFvvcTs8qtIniGvhJlyx6HJDg+fH94Sm7UyAAAAAElFTkSuQmCC" alt='arrow'/>            

          </NavLink>
          <NavLink className='sort'>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeElEQVR4nO2bwWrDMBBE36+4pYVcdOmXpT8b0rTnQgv9BQWDAkbYEthea1VmwAgnmN0dS7NzWIMgCIKwC56Bd2DADq8pxri6QgB+gZjW8d4CXynGJ06Lj+n6A94MYk1juC0+GpLgioBQKN6KBDcEhKz4nIj8v/CfCAhZgT/pt2lyJ+DbYCc0JyAsFD+XnAUJTQkIla09l1ztma4IuFYKWUouJ+GjVwJulbdYSm5KwqVXAgbgDDytTO7x/NCzCLZOTgSgHYCOANIAJII4RFQXQG0wygcgIxQ715nVkAgiEUQiiEQQiSB2UBdAbRD5AGSEkBPEIaKcIHKCUU4QOcHYuc6shkQQiSASQbadz9q0aW2XHTGtanoErjsNYWyZQmlKwG2nMZwtUyhNCfAwiNW8C5TG6/IYpbG9rtvgaYGEaQxXxVv4gFbjuK6MUL4T5q7mb97aCZZIcFO8tRWeI8FV8Ud8znLUZzmr8ZImQcfVCntMmwqCIAgk3AEA+bNLFr+3+wAAAABJRU5ErkJggg==" alt='sort'/>
          Sort
          </NavLink>
          <NavLink className='filter'>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAACOUlEQVR4nO3dP2sUQQCG8UdcEz9B1ICiH8fKym9gLCIofjAbsbA14B+MCtqmEkRE8VKpxRYnB1vIcEm8u92dN3fPD6abYpj3JrPc3ktAkqTzYxt4CLwDfgPTYvwB3gOPgcu1F7vudoEPc0I4aXwCrtde9Lra6j750wXHx+5UqWf7S4Qx7cYj0+jfy2KTnwJX58zbAZ4Ucw8NpH/HxSafdjdcKebOLn/1rC02uel5vhZkIGEMJIyBLOku8H2FR9T/HcveIe0IaxtjfAHunBXGhTlPQwbCYHvwrdvzE10EfhgIY52Sr2cFQneMPntCGDqMI+A2FXmphzGQMAYSxkDCTIpL7eYpc68Vc3+NuM6NcVBs8nPg1px5N4Bnxdw3Fda79vZWeER8UHvx62j21cfrJcI47F7/agCzt4GvFgjjbXefaOCTcg94AfycE8Kku2/uA5dMQpIkSZIkqaZtG105dm105diy0ZVlf4UXZja6BmCjK8xx8am30VVZWwRio8tA9C9PSJj2vPzJGqtBlTaakRtdcQ2qtNGMHEhcgyptNBUCiWpQbXogR7UbVGnangJRTwwkTOsJydIaSJZJEYiNrsoOikBsdFW2t8Ijso2uAdjoCrRjoytPY6NLkiRJkiSNz2ZSEJtJQWwmhbGZFMZmUhibSWH8eU0YAwljIGEMJLxBten/a2qa1qAyELIaVAZCVoPKQKjboPJSD2MgYQwkjIGEsZkUxmZSGJtJYWwmBbKZFMhmkiRJjOcv9coTIdjVqnMAAAAASUVORK5CYII=" alt='filter'/>
          Filter
          </NavLink>
        </div>
        <div className='header-end'>
          <NavLink className='meetings'>
          
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADOklEQVR4nO2cvWoVQRTHf2rSaaFgYSEKgia+gWglvoNttLDTdxBExCRGW30DCxuJgk3QRtBGYsgTGAtBMR8WMZqRlRHCmuTO1+6evff/g1PembPnP3PO7MzOBSGEEEIIIYQQQgghhBBCiPY4A9wBPgDfAZdoG8AS8AA4n+BHar9rwBvgOnCIHjEO3AY2Mx5+L/sFPPJ9hFKi30qIY/SAceBZA4Gv26sIEUr1+boPM+FJC8H/Zw8DfSrZ5zUMc7XF4Fe2BUwG+FWyzyoVmeQk8K1lASqbDfCtZH9VYTbHGPC2g+A74GOAfyX7W8UgdzsKvgscka5wITbFZeB3gOOfgROJfQxqO/f3MTaFIY4DKwFObwIXMvqxIsACcBAjHACeBzp+I7MvCwIsWHsRuxXo+OMCfXUlwKrP+VOWRr4QQojhYtLvtS/5vXfXM9vwb8TVtsQEPaLazp3zm1puSGzLC1Ftj5gP/ksDAXMN2QvrIswZCJIzsFPaWc4fprTj9rDqGc8Vjls1s7IZhdHvvM0UiNdR4N6OM+5slgwExhk6L9ivTt4EvtbazGbdQGBcS5Z6gnXFi7dbm9kMcrpvuILPczZgl9eUwxZwBZ6nnuclQAQ5ARvz5xVfItJaNpoBg/O8BIggNmAheV4CRBAasJg8LwEiGBSwlDwvASIYFLDlQoE3U4Q7f4AaJYMrARIoGdyQA6lsNAP4LwbbwFPglASIJ3fUvwMuRrSXjWYAf2Pwya+O6h9dSYBIYkf8D/8+cDixvWxGdQZs78jzOe017vAwCvC+ludz2mvc4b7hAgW4VKi9xh3uGy4yBZ3ObK9xh/uGSyzCRxLba9zhvuESbaWvy9BhEcDtUR8kQMsC1OuDBOhAgJ31QQJ0KECIZTNqNWBZAnQrgI4kGyZ0RutQviFSPkupVjyqAYXI+TBrUUW420WFPk00sqrTx7lGltUh9SGbtQ5eXlxHlvoPV/vVh2xG6YrSosUrSrMGAuNasvsWL+lNjMg11Z9Wr6mOyiyYxjDV+nfeQJBcQzZv/a8K8A7ODlk62vIj33zw6zVhxt+X6uMd4nXv+3ThnC+EEEIIIYQQQgghhBBCCMFu/AGQEPQvGwxUdwAAAABJRU5ErkJggg==" alt='meeting'/>
          Meetings
          </NavLink>
          <NavLink className='import-export'>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADi0lEQVR4nO2dvW4TQRDH/8Qo0OGIBkMHJZTgmkcgqXkBXiBAlUhxQUUcUHgIMJGQKOERKCDQEwoUhJICECaIZNBKa8myBP6a3Zmd2b80kuWPu5n57e7dze15gaqqqqqqqqqqqqqqqvl1DUAXwHsAPwCQsK17gboIYBvAsYKkkzcIIfmvFSSavELYVpBg8gohjPl/FCSXvELYUpBUmtIewJA+KEgoee4J3xUkkzz3hHFBavOHrEEoHQCVDsECACoZghUAVCoESwCoRAjWAFBpECwCoJIgWAVApUCwDIBKgGAdAGmH4AEAaYbgBQBpheAJAGmE4A0AaYPgEQBpguAVAGmB4BkAQYG0OUgVQAWQVbUHCEsbAHfxqXfQenzqHbQen3oHrcen3kHr8al30Hp86h20Hp96B63Hp95B6/Gpd9B6fOodtB6fegetx6fewTl1E8BlAEsATkULr6/Ez8RlHYB6VQDCqgCEVQEIqwIQVgUgrApAWBYBLABoA7gHoAfgHYBDAEfRDuN7z+J32vE3IrIEoAWgA+DTBHGN2l78bdhGVlkAsBT/dKQ/Q+JHrR+31czlfOkAVgB8YUj8qO3HbSdXqQAamf5qpxv3lUwlAjgLYCdD8ge2E/eZRKUBaMSzF8psLwCcThFQaQC2BJI/sE3vAFYEkx/sBMCyVwDnAHwWBjA4Owqnve4APFKQ/IGFYdAVgAsAfipI/PDF2kVPADqM/7S4zrSt4JMLAAuxTjNvwtaGtnmXYXsfuQp42gG0mVr+qDh6wnUPAO4ztvxRzdsTVj0A6CVKPgeEpx4A7DIOO//SrMNRuKljHsBBopbP0RO+egBwlCH5s0L4xRGgJQBrDPubBoILAAcZkz8tBBdD0K7QWgKTHJhdHIR7GVv+tD2B5TT025QHHm67k/hCLKWtWljC5EmGUkQqYylFbAoH8SZTMY7b2IpxV4WXsToGcD5TOZrTNsCox8LB3B7jX4tp1huX9bmnMIalDF8JBvSysPXOwmQtdi3G+64Sw9FvAJfG+NeMN8Slk7+fet5oOCY8jBdAOdcY60w4LeVEMPlh37fgXF1BAKFhuldDcGpi0km6JelM5sm5z+M+q4bUiBeRKY8JJ3HYqS3/P1pOdHa0n2IeqFU1mR9R6uZ8RMmSWrFEsDdjbWdD4iE9i1oAcCPW88MZ09t4Z23wmGp4Hd4Ln4WScqhqzlRY+ws2VKsCKhWISAAAAABJRU5ErkJggg==" alt='inpport'/>
          Import/Export
          </NavLink>
        </div>
      </div>
        <DashBoard/>
      
      </div>
    </div>
  );
}

export default App;
