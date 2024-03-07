import { Collapse } from '@mui/material';
import { useState } from 'react';
import 'react-dropdown/style.css';

export default function Sidenav(){
  const [dropdown,setDropDown] = useState(false);

  const handleDropDown = () =>{
      setDropDown(!dropdown);
  }

     return(
          <div className='sidenav-body'>
          <div className='gap'></div>
         <div className='sidenav-main'>
         <div className='company'>
            <div className='logo'>
               <a href='#'/>
            </div>
            <div className='company-name'>
             <label className='INC'>INC.</label>
             <label className='Hub'>InnovateHub</label>
             </div>
             <div className='Profile-photo'>
               <img src={require('./profile.png')} alt='profile'/>
          </div>
          </div>
         
         <div className='team-group'>
         <button className='Team'>
       <img src={require('./pen-tool.png')} alt="design"/> 
         Design Team  <button className='in-btn1'>X + 1</button> </button>
          <button className='Team'>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC3ElEQVR4nO2ZX4hMURzHP4utnXaJtuRPKC0j5YlIlBfJg6gtSZOsefGiyCZvu+IBj/6UovUgf1oPG2URD0pLKImynkQ0xpY/IW1Za3S2763TNTP33NmZcS/3W7+Hc8859/4+c/79fmcgUaJEieqoNHAS6AV2AA3EUIuB70DBsmPEUGfl/EVgOzAMjALTiIma5XheIKv0/IHKK4i4lmrqfPRNp5Wqv+8rR0rTgU7guc/5AeBb1EEmAGuBy8APy/m8RmSJ2uWiCrIQOAC8tpz/CdwGNgONvvaRAmkGOoC7wC8L4AWwD5hRpm8YkBRwFXgGNFUTwHzsDPDVct7M+R5rFwqSK0gKuKW6nMp/aKJ+0evAIPDSwd4VWbhZoCXkj+ECkrIgzBpbVOxF5sN3fE652mfgaKkXVwmkyQXC6JwaDQE7tZvMD7AO9TEjOF4FgWRcINDiHFbM46r1dQSZCnQDbUEvMp2uhfx4PUGcZTqdIPogc3TAlrKxTsdjADIUsPHEBuSQooNSNtbpdAxAAlXQkd8Qd5AP6tgdAqaeIMuAt8DuoBdtsxbMY4XYRwKsV+1NkDipxiBrlPoWlNOUlUk5P1UYpuQVpqRrBIJiOGeYyUA7sBfYD1xSxycq29ZTAmpA1zktNVgjWQvG+OgsL8Y5X2aNGHuveO1LhaF8mMWeFUyoWxZXEGM3gVZN0bDJVdhdaxOwxxXCFWRQI+LBeFnbAuCw5aSxEWV3G30bRM1T3YwDyA1FzR5MX5GEbYOe+y8gvDwmMiBTgEcqP63gSmg0CiD3rA+/AuaFzPXtDWK16h6qvLyeIIUKIPy3L31WlNCpKTiika4rSKUQntJFDuODVFEuILlxQniaLedPaVerqlwXe+SV+VdA2uVsf5G6rSXOjUiqTc6a69C5vrp+1XURE12Rw2+AXcAWC8KcATOJiVqtU9s2A7GOmKlRUe0FBX3mv49Zf9upRIkS/af6De+fp4pBaN2gAAAAAElFTkSuQmCC" alt='social'></img>
          Marketing Team <button className='in-btn2'>X + 2</button></button>
          <button className='Team'>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA1klEQVR4nO2UPQ6CQBBGX0Fr7LiD4R6GA2illdp4AkspvYN4DuMtLAznMLSaaDYZEgK7y/DX8RqSmeF71bcwMTBz4Ae8GYlIBK+xBLEI7n2DjkBome9FkFbmofyjIpGQJxA4duZbEMhtde4N/wIby/4m+11lvgI+srt0DTc85GZJHa9EE27I5G6BHatEG27I5XaGm5rkVBJsByjZuiQ4F0ONJFKUzBqulcQNJfOGayQH2V27hjcVLXGUqVXRfE9FKiHmuaDPU0GHkg1C1lCy3uSKkk3Qmj9TlFxHcLqMSQAAAABJRU5ErkJggg==" alt='code'></img>
          Development Team <button className='in-btn3'>X + 3</button></button>
         </div>
        <div className='create-team'>
        <button className='CreateTeamBtn'>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABHUlEQVR4nO2ZTW7CQAyFfQkKp4jGtqJZ9+c0sAT1TMCFGrrpJgeprA4SQowyYQox7fsk7zzSc/xGSvKIAABXEUJ4Y+adiHyKSD9xHUwLM7+OGoKZ3x2I7zO1Kd5EOvAlIssY45wmJsY4Ny1Jk2l7GTykqvvUvCRnyM8wpm1b0nyw5qZpnsgZIYRZGqQbbD56kZwipfowyJ0QbKSS37aqTLURDJIBG6kF1soAa9UCa2WAtf60teTGn7OEQU7Au9Yj3pExYJAM2EgtsFYGWKsWWCsDrOUNwZ9GZ8h/3EhnjR4it3Patl2YNmb+oCFSkus1elsVR28WAXsPQ1X1ueigRcAOYuj+UqnqetRTsAjYVni8MxNXZ1qKNwEAoHO+AeDQWSRvC15lAAAAAElFTkSuQmCC" alt='plus'/>
        Create a team</button>
        </div>
  
        <div className='folder'>
        <button className='folder-btn'>Folder 
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAiElEQVR4nO2UQQrCQAxF50p5/wLWhXjyEaxCvUMPUmoLootScCYtJQ/+Ng+S8FMK9oyZXYEX0Em6eIqfQD/n4SbmI30nxNUgVu0Fh1k1cDaz2+/gfzPOlNQsie+lpasajq3EkhogV5BmSacSv3CQr15LiJMXxI29sO8+z25iTQ3XjinSSEGqyACxtv06juTC3wAAAABJRU5ErkJggg==" alt='plus'/>        </button>
            <button className='products' onClick={handleDropDown}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAXklEQVR4nO2UuQ2AQAwEpzx3QDvUepRB4Eu4DIPvkSDYkZzuWBssiD9hwAF4cPusoDyE+wpJC7ljA87EA349ar2CEUm3IEuYI0FDFb2iisYryoydz0yFLZKUaOzEN1S9SnlopKIkGQAAAABJRU5ErkJggg==" alt='folder'></img>
            Products 
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZklEQVR4nO2RQQ6AIAwEh5fxnB79itx4rTUmcDGIoiVeOufNTAngOM6vBCA+2MWyHZYnYAOWzk7KJo9GjvEKaCdS5fomcBeRr/JeRKzk5//QIq7yZCFvvcTs8qtIniGvhJlyx6HJDg+fH94Sm7UyAAAAAElFTkSuQmCC" alt='arrow' className='arrow'/>            </button>          
            <Collapse in={dropdown} className='collapse'>
            <button>Roadmap</button>
            <button>Feedback</button>
            <button>Performance</button>
            <button>Toam</button>
            <button>Analytics</button>
            <button style={{color:'grey'}}>Add new tab</button>
            </Collapse>
            <button className='products'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAXklEQVR4nO2UuQ2AQAwEpzx3QDvUepRB4Eu4DIPvkSDYkZzuWBssiD9hwAF4cPusoDyE+wpJC7ljA87EA349ar2CEUm3IEuYI0FDFb2iisYryoydz0yFLZKUaOzEN1S9SnlopKIkGQAAAABJRU5ErkJggg==" alt='folder'></img>
            Sales
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZklEQVR4nO2RQQ6AIAwEh5fxnB79itx4rTUmcDGIoiVeOufNTAngOM6vBCA+2MWyHZYnYAOWzk7KJo9GjvEKaCdS5fomcBeRr/JeRKzk5//QIq7yZCFvvcTs8qtIniGvhJlyx6HJDg+fH94Sm7UyAAAAAElFTkSuQmCC" alt='arrow' className='arrow'/>           
             </button>          
            
            <button className='products' >
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAXklEQVR4nO2UuQ2AQAwEpzx3QDvUepRB4Eu4DIPvkSDYkZzuWBssiD9hwAF4cPusoDyE+wpJC7ljA87EA349ar2CEUm3IEuYI0FDFb2iisYryoydz0yFLZKUaOzEN1S9SnlopKIkGQAAAABJRU5ErkJggg==" alt='folder'></img>
            Design
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZklEQVR4nO2RQQ6AIAwEh5fxnB79itx4rTUmcDGIoiVeOufNTAngOM6vBCA+2MWyHZYnYAOWzk7KJo9GjvEKaCdS5fomcBeRr/JeRKzk5//QIq7yZCFvvcTs8qtIniGvhJlyx6HJDg+fH94Sm7UyAAAAAElFTkSuQmCC" alt='arrow' className='arrow'/>            
            </button>          
            <button className='Office' ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAXklEQVR4nO2UuQ2AQAwEpzx3QDvUepRB4Eu4DIPvkSDYkZzuWBssiD9hwAF4cPusoDyE+wpJC7ljA87EA349ar2CEUm3IEuYI0FDFb2iisYryoydz0yFLZKUaOzEN1S9SnlopKIkGQAAAABJRU5ErkJggg==" alt='folder'></img>
            Office
            {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZklEQVR4nO2RQQ6AIAwEh5fxnB79itx4rTUmcDGIoiVeOufNTAngOM6vBCA+2MWyHZYnYAOWzk7KJo9GjvEKaCdS5fomcBeRr/JeRKzk5//QIq7yZCFvvcTs8qtIniGvhJlyx6HJDg+fH94Sm7UyAAAAAElFTkSuQmCC" alt='arrow' className='arrow'/>             */}
            </button>          
            <button className='Legal' ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAXklEQVR4nO2UuQ2AQAwEpzx3QDvUepRB4Eu4DIPvkSDYkZzuWBssiD9hwAF4cPusoDyE+wpJC7ljA87EA349ar2CEUm3IEuYI0FDFb2iisYryoydz0yFLZKUaOzEN1S9SnlopKIkGQAAAABJRU5ErkJggg==" alt='folder'></img>
            Legal
            {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZklEQVR4nO2RQQ6AIAwEh5fxnB79itx4rTUmcDGIoiVeOufNTAngOM6vBCA+2MWyHZYnYAOWzk7KJo9GjvEKaCdS5fomcBeRr/JeRKzk5//QIq7yZCFvvcTs8qtIniGvhJlyx6HJDg+fH94Sm7UyAAAAAElFTkSuQmCC" alt='arrow' className='arrow'/>            */}
             </button>          
          
        </div>
  
         </div>
  
        <div className='footer'>
        <button className='invite'>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADkUlEQVR4nO2aTWxMURSAv2mraYLYqYjYsiEosdGNBFVpUoq0JSQWEiuhTWth0QhJqVYbISyIhf/Gzta6CxQJIoTqDyWki5aonxq5yRm5ud6befPezLT3uV9yksmb987cc++555x73oDD4XA4HA6Hw+FwOApCAqgAdgGHRNTnVfJdbFkAdAPvgKSPqO/OAOXEiATQAnxJY7gpE0BzHDyiDLjhYeCoXO8EuuTzqMd910WHlSQ8jH8AbASKPO5X1zYB/R6TYKUntBiGqJUuDvBcicQK/dkmLGM+MK4ZoFw9W3qMmKCCqDV0G24fZOW9PKHf8CArSBipTu35sFRpekZsiQWrtUG/9wl4QVHPftD0qWJpxtOoDVhlgajc0vTVYwHN2oA7cqDvtG3ZoEkbsBp8VDo1fYexgIb/fQtUGCVv1CD4UdO3EgvTYFUEXdWanmFb0iBypE0NvF+KmmxRzzyOWE3OmFK4O4SOs0YpbF2PoNk40PQE9IQSw/ikdI2sIyFH2aSxHarSHIerDbdXctWmvW9S5jEJSSlvb8oBp0tSnR7tU3LN5oZIioQURxNZtMTGxe2tXXkvymW1R9IYPizRXgXR2JKQgqZBa4s3yLVYrbjD4fiHUmANsBPYD7SKHJQ4sBaYS8xYBpwA7gPfA6TAX8AT6SVU2hoYZwH7gKdZ5H4/uYBl7AZe+xjzG3gB3AEuAu0iqj7olTL4p/HM8wCTXS+V5QDwTeStXGuUrZd3FgJ3PYyekHq+BpgXQM9sYDNwCegDtqW5txZ4FcCL1ILUkUc2AGPGj36SADcnD7+n4sIx8ahstlNHyJc0adkL/NB+ZEoaIvkwPEVbhJiSi0btXw4YqzAokTufbAmx8qbsyMVAaiRlpZQ+kjiQT4olKPoZptLnImCJLIbffW+iBsblxj8++gpUwNRmWNkj2r1mV8kUlR1CUSJvfPUIW6jj6+UMRjX5vFHyktDvLI5qSr6KuxUKr8JKXTsp9USlESvaJfIP+GyDrCkSo6erWfnZMGIqoPet8JgAVSyFKrMfioJ7Ed/6hGHMYwLKQ07AZNgJUPl93TQ1K5/5bIE2KbrUSTPFerl23GcLqFLZOq7kMAjexkLqcpgG92AhKgW/zFAILQaWAkNp7hu0+X3D1gwrG0TUn7Ot5lQE488RA4oDBDkvOS8NlNiwXSq6TIYPxcHt/SiVg43eEpuUQNcr0d7agEe++QMFKyQFfHA8YwAAAABJRU5ErkJggg==" alt='invite'></img>          
        Invite teammates
        </button>
        <button className='help'>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABj0lEQVR4nN2VTUoDQRCFPxITF5obRHcimNzBeAGJIrlCMIjGS0gQPYUmCwkIgi7dujaKP1FP4A8YXZhNRhreQDNOT09c5kFBeK+6qqe6qgKTjjxQAzrAA/AtM7/b0ozPv7AOvACBx56BtXECZ4B9K8A1sA0sATOyErAD9Cy/ls56EQb/AeqeQ0bblG+YxFuWMPiyxc8BXWAgOwUWLb1iJam6guetmtcjwd9jav8hLURD/BOQi0tQs2pul6Ur/hwoyi7EnVh+WeBG/EZcgo5E86A2BuKLka8y3GfEtyn+OC7Bo0TTLT7My/c1wpfEmzn5g/CmBU/waZXL+B5EtIL4wX8TTAFn8ruMmeLEBGlKdCifK8dFykklaks0E+rCm3wWHPqu9KOkNu2lHfkITJveJrVpXosr0PjHIZDFYUta3zVoaCuGq6IyRoIVYAiMgFU8aFlJGvp0F7K6+VBn9kiBjJUk0Pg3NUSzsrIeNKz5SMHHeruqFpfvD6efpiwu5NQRZrfcA1+yO7Wi0ZwPOhn4BT6dkYKwNK6qAAAAAElFTkSuQmCC" alt='help'></img>
          Help & first steps
        </button>
        <div className='Subscription'>
        <div>7 days left on trail</div>
        <button>Add billing</button>
         </div>
        </div>
        </div>
     )
}