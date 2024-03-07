import { Checkbox } from "@mui/material";

export default function DashBoard(){
     return(
          
          <div className="dashboard">

               <table>
                    <tr>
                         <th className="checkbox"></th>
                         <th className="brand">Brand</th>
                         <th className="desc">Description</th>
                         <th className="members">Members</th>
                         <th className="categ">Categories</th>
                         <th className="tag">Tags</th>
                         <th className="meet">Next Meetings</th>
                         <th className="add">+</th>
                    </tr>

                    
                    <tr>
                         <td className="checkbox"><Checkbox/></td>
                         <td className="brand">
                         <img className="logo wix" src={require('./components/wix.png')} alt="wix"/>Wix <div>
                              
                         </div></td>
                         <td className="desc">Description</td>
                         <td className="members">Members</td>
                         <td className="categ">Categories</td>
                         <td className="tag">Tags</td>
                         <td className="meet tmrw"><label>Tomorrow</label> </td>
                         <td className="add"></td>
                    </tr>
                    <tr>
                         <td className="checkbox"><Checkbox/></td>
                         <td className="brand">
                              <img src={require('./components/shopify.png')} alt="shopify"/>Shopify
                         </td>
                         <td className="desc">Description</td>
                         <td className="members">Members</td>
                         <td className="categ">Categories</td>
                         <td className="tag">Tags</td>
                         <td className="meet nocontact"><label>No Contact</label> </td>
                         <td className="add"></td>
                    </tr>
                    <tr>
                         <td className="checkbox"><Checkbox/></td>
                         <td className="brand">
                         <img src={require('./components/mailchimp.png')} alt="shopify"/>Mailchimp
                         </td>
                         <td className="desc">Description</td>
                         <td className="members">Members</td>
                         <td className="categ">Categories</td>
                         <td className="tag">Tags</td>
                         <td className="meet intime"><label>In 30 Minutes</label></td>
                         <td className="add"></td>
                    </tr>
                    <tr>
                         <td className="checkbox"><Checkbox/></td>
                         <td className="brand">
                         <img src={require('./components/paypal.png')} alt="paypal"/>Paypal
                         </td>
                         <td className="desc">Description</td>
                         <td className="members">Members</td>
                         <td className="categ">Categories</td>
                         <td className="tag">Tags</td>
                         <td className="meet tmrw"><label>Tomorrow</label> </td>
                         <td className="add"></td>
                    </tr>
                    <tr>
                         <td className="checkbox"><Checkbox/></td>
                         <td className="brand">
                         <img src={require('./components/disney.png')} alt="shopify"/>Disney
                         </td>
                         <td className="desc">Description</td>
                         <td className="members">Members</td>
                         <td className="categ">Categories</td>
                         <td className="tag">Tags</td>
                         <td className="meet intime"><label>In 6 hrs</label></td>
                         <td className="add"></td>
                    </tr>
                    <tr>
                         <td className="checkbox"><Checkbox/></td>
                         <td className="brand">
                         <img src={require('./components/intercom.png')} alt="shopify"/>Intercom

                         </td>
                         <td className="desc">Description</td>
                         <td className="members">Members</td>
                         <td className="categ">Categories</td>
                         <td className="tag">Tags</td>
                         <td className="meet nxtmnth"><label>Next Month</label></td>
                         <td className="add"></td>
                    </tr>
                    <tr>
                         <td className="checkbox"><Checkbox/></td>
                         <td className="brand">
                         <img src={require('./components/google.png')} alt="shopify"/>Google

                         </td>
                         <td className="desc">Description</td>
                         <td className="members">Members</td>
                         <td className="categ">Categories</td>
                         <td className="tag">Tags</td>
                         <td className="meet intime"><label>In 1 hour</label></td>
                         <td className="add"></td>
                    </tr>
                    <tr>
                         <td className="checkbox"><Checkbox/></td>
                         <td className="brand">
                         <img src={require('./components/evernote.png')} alt="shopify"/>Evernote
                         </td>
                         <td className="desc">Description</td>
                         <td className="members">Members</td>
                         <td className="categ">Categories</td>
                         <td className="tag">Tags</td>
                         <td className="meet nocontact"><label>No Contact</label> </td>
                         <td className="add"></td>
                    </tr>
                    <tr>
                         <td className="checkbox"><Checkbox/></td>
                         <td className="brand">
                         <img src={require('./components/microsoft.png')} alt="shopify"/>Microsoft

                         </td>
                         <td className="desc">Description</td>
                         <td className="members">Members</td>
                         <td className="categ">Categories</td>
                         <td className="tag">Tags</td>
                         <td className="meet tmrw"><label> Tomorrow</label> </td>
                         <td className="add"></td>
                    </tr>
                    <tr>
                         <td className="checkbox"><Checkbox/></td>
                         <td className="brand">
                         <img src={require('./components/invision.png')} alt="shopify"/>invision

                         </td>
                         <td className="desc">Description</td>
                         <td className="members">Members</td>
                         <td className="categ">Categories</td>
                         <td className="tag">Tags</td>
                         <td className="meet nxtmnth"><label>Next Month</label></td>
                         <td className="add"></td>
                    </tr>

                    <tr>
                         <td className="checkbox"></td>
                         <td className="Last-row">
                         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAYAAADHyrhzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEt0lEQVR4nO1bCY8UVRB+eCSABjWiEqNGQrwmu911dPcOYOyI8YoiYXEgakIiHlkliicKKBjxQHcVg2IAxWVhfqgpp3tTW2lmxj36dZP3JS+7edM9r/p7VfXq6HFuBciy7IEoirY2bUxOTt7l6gYiziFiv4HjQCADAxn9oBkYzKQffAa2z4HOIOIhX4OIjjWGjCzLNjmPIKJuIKNAIEMhkKEQyFAIZCgEMhQAYEc4TQow89NeySCiU6UAzLzNeQQz90pZAODF2gUAgLdKAYjoeecRRHSylCVJkgmvdgoAXztPYObNRHStkOVKnufraxciz/P1RHRZEdLxpBXvKg094kOG/0BE7yjHNcvMG12NQMQniOiqkiFyPlUUEeeVMF/0er2b61gbAO5BxD+VVpx0voGIB3Q9AQAOrvWaooGI+LMi4ioAPLLW644EM9+KiN+bAstuUdmCqFUdaZpuEYdtNuBV1xSkabqFiC4aQl5BxE9WqwUgu8/MzxLRcTN/rC7THBtyviPighJSjrsXiOjwKpCxwMxPIuJRMz8XRdFtrokAgB3qzC8JeQYA3l4BEfMAkALAp8Y0zokTdU0GIj5lCZEIlZlfX4ZpXE6SBCvMTU6R+10bwMzPmYe6JjlD4VjHJeOSmB4AfGnn4zh+2LUJRPSy1pDSqQopFfN2nGfmxxHxK0PqxSzLtro2goh2mQhRxj5m3qmdrXWKsvOI+I2Z/yNJkgddm8HMU5JAGed3MI7jnRUaclZ2HhF/MBrx68TExH3uRgAiRjqpK8ahovmk57YT0S+GuDNe3rmosU5ZnjKLc0XQtt2Q87fvBtWaRKiI+Jt50BOi+oqMU2ma3k1EF8x1H0vI724ExANnuJhdFg9+XJKtTqdzu5r7vLyeiH63xHW73Q2uzeDB8XjJEPFRnue3yOfyV/mGD016ftbcd7q1JpMkCRLRP+aBDuukSv5Xn3+g7xeTqXhvbLZ1zjQZJG3zhoj3bXY5jAwBM9+BiD/aOETmXRsQRdGj9hiVSrpzbp29dhQZAjENG3cIQeJvXJPBzNvkOLQBVhUR45IhkAcnou/M956uu+Y6NiSLrCjwvHk9IgRSi1Bm9Nmw7y9OHmsyJxpX2OkMBF3i7KSEP4yIsrqtdvrcqHXEZIjoTMU6jcE62VWzYzOjiBAAwGv6PmZ+aNQ9cRzfaYkHgNw1JTPFpUQcdc7dNOo+OSKtf5Eizv9oUZzXYXsURfc6n2DmjTp8JqKfxnFqRan/26oUnoj2jrO2tAb08a2DNi8gov3qIS6Mk2YXLYQl0WUFIUfGqW/qfq8kft4qYL3BsbioqmIuYwRitmAzbEjxZ2Zqamoowbo+WsQz9SOOY9BRYdURJ7mHVLVsjLCMNsF71yv3ye9eVJHorzLvqRVE9IYSeNoIuAkA9lRknysa0kmTtoElXpI4dU39bUZSna0kSR4rQ3HZRZuXrPYoSJ4ukzbd75WuW+1kIOKsEjCpyB/qGAvibIUARdR+H2TMqd14yQMRWlN2NeZFehg0iLyRIRFoIAMDGf2gGRjMpB98BrbYgSLitM/fqJmXYbyT0W/QCGRgIAODZmAwEww+A9vgQImoW7yz1aix3F9F/QsuXWCf3ZQUagAAAABJRU5ErkJggg==" alt="tag" className="img"></img>                         Count
                         </td>
                         <td className="Last-row"><label>+</label> Add calculation</td>
                         <td className="Last-row"><label>+</label> Add calculation</td>
                         <td className="Last-row"><label>+</label> Add calculation</td>
                         <td className="Last-row"><label>+</label> Add calculation</td>
                         <td className="meet"></td>
                         <td className="add"></td>
                    </tr>
                    
               </table>
               {/* <div className="checkbox-group">
                    <div className="group-head">c</div>

                    <div ><Checkbox className="checkbox"/> </div>
                    <div ><Checkbox className="checkbox"/></div>
                    <div ><Checkbox className="checkbox"/></div>
                    <div ><Checkbox className="checkbox"/></div>
                    <div ><Checkbox className="checkbox"/></div>
                    <div ><Checkbox className="checkbox"/></div>
                    <div ><Checkbox className="checkbox"/></div>
                    <div ><Checkbox className="checkbox"/></div>
                    <div ><Checkbox className="checkbox"/></div>
                    <div ><Checkbox className="checkbox"/></div>
               </div>
               <div className="Brand-group">
                    <div className="group-head">Brand</div>

                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>0</div>
               </div>
               <div className="Description-group">
                    <div className="group-head">Description</div>

                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>0</div>
               </div>
               <div className="Members-group">Members
                    <div className="group-head"></div>

                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>0</div>
               </div>
               <div className="Categories-group">Categories
               
                    <div className="group-head"></div>

                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>0</div>
                    </div>
               <div className="Tags-group">Tags
                    <div className="group-head"></div>

                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>0</div>
               </div>
               <div className="Meeting-group">Meetings
                    <div className="group-head"></div>

                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>0</div>

               </div>
               <div className="Add-group">Add
               <div className="group-head"></div>

                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>0</div></div> */}

          </div>
     )
} 