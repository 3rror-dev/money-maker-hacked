/*

    __  __    _    _  _______    
   |  \/  |  / \  | |/ / ____|   
   | |\/| | / _ \ | ' /|  _|     
   | |  | |/ ___ \| . \| |___    
  _|_|__|_/_/  _\_\_|\_\_____| __
 |  \/  |/ _ \| \ | | ____\ \ / /
 | |\/| | | | |  \| |  _|  \ V / 
 | |  | | |_| | |\  | |___  | |  
 |_|  |_|\___/|_| \_|_____| |_|  
                                 
Developed by Economical Games
Hacked by Error Dev
                                 
*/

(function(){var balance
    var items
    var item_details={1:[100,"Water Bottle",10],2:[100,"Backpack",50],3:[100,"Cart",100],4:[200,"Bicycle",200],5:[300,"Smartphone",750],6:[300,"Gaming Laptop",2000],7:[500,"Plasma TV",5000],8:[1000,"Motorcycle",15000],9:[1500,"Car",35000],10:[2000,"Luxury Car",100000],11:[5000,"Apartment",300000],12:[25000,"House",1000000],13:[100000,"Mansion",10000000],14:[300000,"Rocket",100000000],15:[500000,"Space Shuttle",1000000000],16:[1000000,"Saturn V",5000000000],17:[10000000,"Moon Landing",25000000000],18:[100000000,"McDonald's",100000000000],19:[1000000000,"Apple",1000000000000],20:[5000000000,"Fortune 500",20000000000000],21:[100000000000,"United States",200000000000000],22:[1000000000000,"Everything on Earth",1000000000000000],23:[10000000000000000000,"Earth",100000000000000000]}
    var income
    var bonus_clicks
    var can_list=[]
    var active_buyitem
    var decimal_digits
    var current_help_page=1
    var last_help_page=3
    var current_updates_page=1
    var last_updates_page=23
    var upgrade_details
    var prestige_points=2000
    var prestige_get
    var skip_save=!1
    function convert_number(number){var converted_number;if(decimal_digits==2){if(number>=1000000000000000000000000000000000){converted_number="$"+Math.round(number*100/1000000000000000000000000000000000.0)/100+" Decillion"}else if(number>=1000000000000000000000000000000){converted_number="$"+Math.round(number*100/1000000000000000000000000000000.0)/100+" Nonillion"}else if(number>=1000000000000000000000000000){converted_number="$"+Math.round(number*100/1000000000000000000000000000.0)/100+" Octillion"}else if(number>=1000000000000000000000000){converted_number="$"+Math.round(number*100/1000000000000000000000000.0)/100+" Septillion"}else if(number>=1000000000000000000000){converted_number="$"+Math.round(number*100/1000000000000000000000.0)/100+" Sextillion"}else if(number>=1000000000000000000){converted_number="$"+Math.round(number*100/1000000000000000000.0)/100+" Quintillion"}else if(number>=1000000000000000){converted_number="$"+Math.round(number*100/1000000000000000.0)/100+" Quadrillion"}else if(number>=1000000000000){converted_number="$"+Math.round(number*100/1000000000000.0)/100+" Trillion"}else if(number>=1000000000){converted_number="$"+Math.round(number*100/1000000000.0)/100+" Billion"}else if(number>=1000000){converted_number="$"+Math.round(number*100/1000000.0)/100+" Million"}else{converted_number="$"+number}}else if(decimal_digits==3){if(number>=1000000000000000000000000000000000){converted_number="$"+Math.round(number*1000/1000000000000000000000000000000000.0)/1000+" Decillion"}else if(number>=1000000000000000000000000000000){converted_number="$"+Math.round(number*1000/1000000000000000000000000000000.0)/1000+" Nonillion"}else if(number>=1000000000000000000000000000){converted_number="$"+Math.round(number*1000/1000000000000000000000000000.0)/1000+" Octillion"}else if(number>=1000000000000000000000000){converted_number="$"+Math.round(number*1000/1000000000000000000000000.0)/1000+" Septillion"}else if(number>=1000000000000000000000){converted_number="$"+Math.round(number*1000/1000000000000000000000.0)/1000+" Sextillion"}else if(number>=1000000000000000000){converted_number="$"+Math.round(number*1000/1000000000000000000.0)/1000+" Quintillion"}else if(number>=1000000000000000){converted_number="$"+Math.round(number*1000/1000000000000000.0)/1000+" Quadrillion"}else if(number>=1000000000000){converted_number="$"+Math.round(number*1000/1000000000000.0)/1000+" Trillion"}else if(number>=1000000000){converted_number="$"+Math.round(number*1000/1000000000.0)/1000+" Billion"}else if(number>=1000000){converted_number="$"+Math.round(number*1000/1000000.0)/1000+" Million"}else{converted_number="$"+number}
    if(converted_number.includes(".")){var decimal=converted_number.substr(converted_number.indexOf(".")+1)
    decimal=decimal.substr(0,decimal.indexOf(" "))
    if(decimal.length==2){converted_number=converted_number.substr(0,converted_number.indexOf(" "))+"0 "+converted_number.substr(converted_number.indexOf(" ")+1)}}}else if(decimal_digits==4){if(number>=1000000000000000000000000000000000){converted_number="$"+Math.round(number*10000/1000000000000000000000000000000000.0)/10000+" Decillion"}else if(number>=1000000000000000000000000000000){converted_number="$"+Math.round(number*10000/1000000000000000000000000000000.0)/10000+" Nonillion"}else if(number>=1000000000000000000000000000){converted_number="$"+Math.round(number*10000/1000000000000000000000000000.0)/10000+" Octillion"}else if(number>=1000000000000000000000000){converted_number="$"+Math.round(number*10000/1000000000000000000000000.0)/10000+" Septillion"}else if(number>=1000000000000000000000){converted_number="$"+Math.round(number*10000/1000000000000000000000.0)/10000+" Sextillion"}else if(number>=1000000000000000000){converted_number="$"+Math.round(number*10000/1000000000000000000.0)/10000+" Quintillion"}else if(number>=1000000000000000){converted_number="$"+Math.round(number*10000/1000000000000000.0)/10000+" Quadrillion"}else if(number>=1000000000000){converted_number="$"+Math.round(number*10000/1000000000000.0)/10000+" Trillion"}else if(number>=1000000000){converted_number="$"+Math.round(number*10000/1000000000.0)/10000+" Billion"}else if(number>=1000000){converted_number="$"+Math.round(number*10000/1000000.0)/10000+" Million"}else{converted_number="$"+number}
    if(converted_number.includes(".")){var decimal=converted_number.substr(converted_number.indexOf(".")+1)
    decimal=decimal.substr(0,decimal.indexOf(" "))
    if(decimal.length==2){converted_number=converted_number.substr(0,converted_number.indexOf(" "))+"00 "+converted_number.substr(converted_number.indexOf(" ")+1)}else if(decimal.length==3){converted_number=converted_number.substr(0,converted_number.indexOf(" "))+"0 "+converted_number.substr(converted_number.indexOf(" ")+1)}}}else{if(number>=1000000000000000000000000000){converted_number="$"+Math.round(number*1000/1000000000000000000000000000.0)/1000+" Octillion"}else if(number>=1000000000000000000000000){converted_number="$"+Math.round(number*1000/1000000000000000000000000.0)/1000+" Septillion"}else if(number>=1000000000000000000000){converted_number="$"+Math.round(number*1000/1000000000000000000000.0)/1000+" Sextillion"}else if(number>=1000000000000000000){converted_number="$"+Math.round(number*1000/1000000000000000000.0)/1000+" Quintillion"}else if(number>=1000000000000000){converted_number="$"+Math.round(number*1000/1000000000000000.0)/1000+" Quadrillion"}else if(number>=1000000000000){converted_number="$"+Math.round(number*1000/1000000000000.0)/1000+" Trillion"}else if(number>=1000000000){converted_number="$"+Math.round(number*1000/1000000000.0)/1000+" Billion"}else if(number>=1000000){converted_number="$"+Math.round(number*1000/1000000.0)/1000+" Million"}else{converted_number="$"+number}}
    return converted_number}
    function save_changes(){chrome.storage.sync.set({"game_data":{balance:balance,bonus_clicks:bonus_clicks,items:items,decimal_digits:decimal_digits,upgrade_details:upgrade_details,prestige_points:prestige_points}})}
    function add_switch_listener(switch_buttons,clicked_button,type){clicked_button.addEventListener("click",function(){switch_to_div(type)
    for(var button_num=0;button_num<5;button_num ++){var button=switch_buttons[button_num]
    if(button.style.backgroundColor=="rgb(255, 255, 255)"){button.removeAttribute("style")}}
    clicked_button.style.border="0.5px solid #000000"
    clicked_button.style.borderBottom="none"
    clicked_button.style.background="#FFFFFF"})}
    function get_data(){chrome.storage.sync.get("game_data",function(result){var data=result.game_data
    if(data){balance=data.balance
    bonus_clicks=data.bonus_clicks
    items=data.items
    decimal_digits=data.decimal_digits
    upgrade_details=data.upgrade_details
    prestige_points=data.prestige_points
    if(!prestige_points){prestige_points=0}}else{balance=0
    bonus_clicks=0
    items={1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1,16:!1,17:!1,18:!1,19:!1,20:!1,21:!1,22:!1}
    decimal_digits=3
    upgrade_details={"income_boost":{levels:25,costs:[100000/2,1000000/2,5000000/2,10000000/2,25000000/2,50000000/2,75000000/2,100000000/2,250000000/2,500000000/2,750000000/2,1000000000/2,5000000000/2,10000000000/2,50000000000/2,100000000000/2,250000000000/2,500000000000/2,750000000000/2,1000000000000/2,5000000000000/2,10000000000000/2,100000000000000/2,500000000000000/2,1000000000000000/2],bought:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1,16:!1,17:!1,18:!1,19:!1,20:!1,21:!1,22:!1,23:!1,24:!1,25:!1}},"bonus_clicks":{levels:50,costs:[1000/2,10000/2,50000/2,100000/2,500000/2,1000000/2,1500000/2,2000000/2,2500000/2,3000000/2,3500000/2,4000000/2,4500000/2,5000000/2,7500000/2,10000000/2,15000000/2,20000000/2,25000000/2,30000000/2,35000000/2,40000000/2,45000000/2,50000000/2,75000000/2,100000000/2,150000000,200000000/2,250000000/2,300000000/2,350000000/2,400000000/2,450000000/2,500000000/2,750000000/2,1000000000/2,1500000000/2,2000000000/2,2500000000/2,3000000000/2,3500000000/2,4000000000/2,4500000000/2,5000000000/2,7500000000/2,10000000000/2,100000000000/2,1000000000000/2,10000000000000/2,100000000000000/2],bought:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1,16:!1,17:!1,18:!1,19:!1,20:!1,21:!1,22:!1,23:!1,24:!1,25:!1,26:!1,27:!1,28:!1,29:!1,30:!1,31:!1,32:!1,33:!1,34:!1,35:!1,36:!1,37:!1,38:!1,39:!1,40:!1,41:!1,42:!1,43:!1,44:!1,45:!1,46:!1,47:!1,48:!1,49:!1,50:!1}}}
    prestige_points=0
    save_changes()}})}
    function calculate_income(){var income=1;for(var item=1;item<24;item ++){var value=items[item]
    if(value){income+=item_details[item][0]}}
    var income_boosts=0
    var income_boost_bought=upgrade_details.income_boost.bought
    for(var upgrade_num=1;upgrade_num<upgrade_details.income_boost.levels+1;upgrade_num ++){if(income_boost_bought[upgrade_num]){income_boosts ++}}
    income*=(1+income_boosts/10)
    income*=(1+(5*prestige_points)/5)
    income=Math.round(income)
    return income}
    function calculate_bonus_click_rate(){click_rate=0
    var bonus_click_upgrades=upgrade_details.bonus_clicks.bought
    for(var num=1;num<Object.keys(bonus_click_upgrades).length+1;num ++){if(bonus_click_upgrades[num]){click_rate+=0.1}}
    return Math.round(click_rate*10)/10}
    function switch_to_div(type){var to_div=document.getElementById(type+"_screen")
    var buttons=document.getElementsByClassName("switchButton")
    for(var button_num=0;button_num<buttons.length;button_num ++){var button=buttons[button_num]
    if(button.style.background=="rgb(255, 255, 255)"){var button_type=button.id.substr(0,button.id.indexOf("_"))
    var current_div=document.getElementById(button_type+"_screen")}}
    current_div.style.display="none"
    if(current_div.id=="income_screen"){document.getElementById("income_back").style.display="none"
    document.getElementById("income_next").style.display="none"}else if(current_div.id=="help_screen"){document.getElementById("help_back").style.display="none"
    document.getElementById("help_next").style.display="none"
    for(var screen_num=2;screen_num<last_help_page+1;screen_num ++){document.getElementById("help_pg"+screen_num).style.display="none"}
    document.getElementById("help_pg1").style.display="block"
    current_help_page=1}else if(current_div.id=="updates_screen"){document.getElementById("updates_back").style.display="none"
    document.getElementById("updates_next").style.display="none"
    for(var screen_num=2;screen_num<last_updates_page+1;screen_num ++){var screen_id="updates_pg"+screen_num
    document.getElementById(screen_id).style.display="none"}
    document.getElementById("updates_pg1").style.display="block"
    current_updates_page=1}
    if(to_div.id=="income_screen"){display_income_screen()}else if(to_div.id=="help_screen"){document.getElementById("help_next").style.display="block"}else if(to_div.id=="updates_screen"){document.getElementById("updates_next").style.display="block"}else if(to_div.id=="upgrades_screen"){display_upgrades_info()}
    to_div.style.display="block"}
    function display_income_screen(){var first_screen=document.getElementById("income_screen_pg1")
    var second_screen=document.getElementById("income_screen_pg2")
    first_screen.style.display="block"
    second_screen.style.display="none"
    var income_element=document.getElementById("incomescreen_income")
    var converted_income=convert_number(income)
    income_element.innerHTML=converted_income
    var prestige_points_info=document.getElementById("prestige_points_info")
    var points_info=prestige_points
    points_info+=" (+"+prestige_points*100+"%)"
    prestige_points_info.innerHTML=points_info
    var income_boosts=0
    var income_boost_bought=upgrade_details.income_boost.bought
    for(var upgrade_num=1;upgrade_num<upgrade_details.income_boost.levels+1;upgrade_num ++){if(income_boost_bought[upgrade_num]){income_boosts ++}}
    var boosts=document.getElementById("boosts_number")
    if(income_boosts==0){boosts.innerHTML="None"}else{boosts.innerHTML="+"+income_boosts*10+"%"}
    var total_boost_number=document.getElementById("total_boost_number")
    if((income_boosts+prestige_points)==0){total_boost_number.innerHTML="None"}else if(prestige_points==0){total_boost_number.innerHTML="+"+(income_boosts*10)+"%"}else{total_boost_number.innerHTML="+"+(prestige_points*100+((1+(5*prestige_points)/5)*income_boosts*10))+"%"}
    var possessions_pg1=""
    var possessions_pg2=""
    for(var item=1;item<10;item ++){if(items[item]==!0){possessions_pg1+=item_details[item][1]
    possessions_pg1+=": Income + "
    var add_income=item_details[item][0].toLocaleString()
    possessions_pg1+=add_income
    possessions_pg1+="<br><br>"}}
    for(var item=10;item<24;item ++){if(items[item]==!0){possessions_pg2+=item_details[item][1]
    possessions_pg2+=": Income +"
    var add_income=item_details[item][0].toLocaleString()
    possessions_pg2+=add_income
    possessions_pg2+="<br><br>"}}
    possessions_pg1+="<br><br>"
    possessions_pg2+="<br><br>"
    var items_area_pg1=document.getElementById("possessions_pg1")
    var items_area_pg2=document.getElementById("possessions_pg2")
    if(possessions_pg1=="<br><br>"){items_area_pg1.innerHTML="You have no possessions! =("}else if(possessions_pg2=="<br><br>"){items_area_pg1.innerHTML=possessions_pg1}else{items_area_pg1.innerHTML=possessions_pg1
    items_area_pg2.innerHTML=possessions_pg2
    document.getElementById("income_next").style.display="block"}}
    function income_back_clicked(){document.getElementById("income_back").style.display="none"
    document.getElementById("income_next").style.display="block"
    document.getElementById("income_screen_pg1").style.display="block"
    document.getElementById("income_screen_pg2").style.display="none"}
    function income_next_clicked(){document.getElementById("income_back").style.display="block"
    document.getElementById("income_next").style.display="none"
    document.getElementById("income_screen_pg1").style.display="none"
    document.getElementById("income_screen_pg2").style.display="block"}
    function help_back_clicked(){var help_back=document.getElementById("help_back")
    var help_next=document.getElementById("help_next")
    var old_page=document.getElementById("help_pg"+current_help_page)
    var new_page=document.getElementById("help_pg"+(current_help_page-1))
    current_help_page --
    help_next.style.display="block"
    old_page.style.display="none"
    new_page.style.display="block"
    if(current_help_page==1){help_back.style.display="none"}}
    function help_next_clicked(){var help_back=document.getElementById("help_back")
    var help_next=document.getElementById("help_next")
    var old_page=document.getElementById("help_pg"+current_help_page)
    var new_page=document.getElementById("help_pg"+(current_help_page+1))
    current_help_page ++
    help_back.style.display="block"
    old_page.style.display="none"
    new_page.style.display="block"
    if(current_help_page==last_help_page){help_next.style.display="none"}}
    function updates_back_clicked(){var updates_back=document.getElementById("updates_back")
    var updates_next=document.getElementById("updates_next")
    var old_page=document.getElementById("updates_pg"+current_updates_page)
    var new_page=document.getElementById("updates_pg"+(current_updates_page-1))
    current_updates_page --
    updates_next.style.display="block"
    old_page.style.display="none"
    new_page.style.display="block"
    if(current_updates_page==1){updates_back.style.display="none"}}
    function updates_next_clicked(){var updates_back=document.getElementById("updates_back")
    var updates_next=document.getElementById("updates_next")
    var old_page=document.getElementById("updates_pg"+current_updates_page)
    var new_page=document.getElementById("updates_pg"+(current_updates_page+1))
    current_updates_page ++
    updates_back.style.display="block"
    old_page.style.display="none"
    new_page.style.display="block"
    if(current_updates_page==last_updates_page){updates_next.style.display="none"}}
    function settings_button_clicked(){document.getElementById("content_area").style.display="none"
    document.getElementById("prestige_area").style.display="none"
    document.getElementById("prestige_back").style.display="none"
    document.getElementById("casino_area").style.display="none"
    document.getElementById("casino_back").style.display="none"
    document.getElementById("settings_area").style.display="block"
    document.getElementById("settings_back").style.display="block"
    document.getElementById("settings_save_note").style.display="block"}
    function settings_back_clicked(){document.getElementById("content_area").style.display="block"
    document.getElementById("settings_area").style.display="none"
    document.getElementById("settings_back").style.display="none"
    document.getElementById("settings_save_note").style.display="none"}
    function prestige_button_clicked(){document.getElementById("content_area").style.display="none"
    document.getElementById("settings_area").style.display="none"
    document.getElementById("settings_back").style.display="none"
    document.getElementById("settings_save_note").style.display="none"
    document.getElementById("casino_area").style.display="none"
    document.getElementById("casino_back").style.display="none"
    document.getElementById("prestige_area").style.display="block"
    document.getElementById("prestige_back").style.display="block"
    var num_items=0
    var do_prestige_button=document.getElementById("do_prestige_button")
    var prestige_get_text=document.getElementById("prestige_get")
    for(var item_num=1;item_num<24;item_num ++){if(items[item_num]==!0){num_items ++}}
    if(num_items>10){prestige_get=num_items-10}else{prestige_get=0}
    prestige_get_text.innerHTML=prestige_get
    if(prestige_get==0){do_prestige_button.style.pointerEvents="none"}else{do_prestige_button.style.pointerEvents="auto"}}
    function prestige_back_clicked(){document.getElementById("content_area").style.display="block"
    document.getElementById("prestige_area").style.display="none"
    document.getElementById("prestige_back").style.display="none"}
    function prestige(){var contents=document.getElementById("popup_contents")
    prestige_points+=prestige_get
    prestige_get=0
    balance=0
    bonus_clicks=0
    items={1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1,16:!1,17:!1,18:!1,19:!1,20:!1,21:!1,22:!1}
    decimal_digits=3
    upgrade_details={"income_boost":{levels:25,costs:[100000/2,1000000/2,5000000/2,10000000/2,25000000/2,50000000/2,75000000/2,100000000/2,250000000/2,500000000/2,750000000/2,1000000000/2,5000000000/2,10000000000/2,50000000000/2,100000000000/2,250000000000/2,500000000000/2,750000000000/2,1000000000000/2,5000000000000/2,10000000000000/2,100000000000000/2,500000000000000/2,1000000000000000/2],bought:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1,16:!1,17:!1,18:!1,19:!1,20:!1,21:!1,22:!1,23:!1,24:!1,25:!1}},"bonus_clicks":{levels:50,costs:[1000/2,10000/2,50000/2,100000/2,500000/2,1000000/2,1500000/2,2000000/2,2500000/2,3000000/2,3500000/2,4000000/2,4500000/2,5000000/2,7500000/2,10000000/2,15000000/2,20000000/2,25000000/2,30000000/2,35000000/2,40000000/2,45000000/2,50000000/2,75000000/2,100000000/2,150000000,200000000/2,250000000/2,300000000/2,350000000/2,400000000/2,450000000/2,500000000/2,750000000/2,1000000000/2,1500000000/2,2000000000/2,2500000000/2,3000000000/2,3500000000/2,4000000000/2,4500000000/2,5000000000/2,7500000000/2,10000000000/2,100000000000/2,1000000000000/2,10000000000000/2,100000000000000/2],bought:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1,16:!1,17:!1,18:!1,19:!1,20:!1,21:!1,22:!1,23:!1,24:!1,25:!1,26:!1,27:!1,28:!1,29:!1,30:!1,31:!1,32:!1,33:!1,34:!1,35:!1,36:!1,37:!1,38:!1,39:!1,40:!1,41:!1,42:!1,43:!1,44:!1,45:!1,46:!1,47:!1,48:!1,49:!1,50:!1}}}
    contents.style.pointerEvents="none"
    var counter=100
    var prestige_animation=setInterval(function(){counter --
    contents.style.opacity=counter/100
    if(counter==0){clearInterval(prestige_animation)}},10)
    setTimeout(function(){prestige_back_clicked()
    update_status()
    update_values()
    document.getElementById("buy_area").style.display="none"
    var type="money"
    var switch_buttons=document.getElementsByClassName("switchButton")
    switch_to_div(type)
    for(var button_num=0;button_num<5;button_num ++){var button=switch_buttons[button_num]
    if(button.style.backgroundColor=="rgb(255, 255, 255)"){button.removeAttribute("style")}}
    var clicked_button=document.getElementById("money_switch")
    clicked_button.style.border="0.5px solid #000000"
    clicked_button.style.borderBottom="none"
    clicked_button.style.background="#FFFFFF"},1100)
    setTimeout(function(){var counter=0
    var prestige_animation=setInterval(function(){counter ++
    contents.style.opacity=counter/100
    if(counter==100){clearInterval(prestige_animation)}},10)},1500)
    setTimeout(function(){contents.style.pointerEvents="auto"},2500)}
    function casino_button_clicked(){document.getElementById("casino_area").style.display="block"
    document.getElementById("casino_back").style.display="block"
    document.getElementById("prestige_area").style.display="none"
    document.getElementById("prestige_back").style.display="none"
    document.getElementById("settings_area").style.display="none"
    document.getElementById("settings_save_note").style.display="none"
    document.getElementById("settings_back").style.display="none"
    document.getElementById("content_area").style.display="none"
    update_casino_money()
    var slot_1=document.getElementById("slot_1_digit")
    var slot_2=document.getElementById("slot_2_digit")
    var slot_3=document.getElementById("slot_3_digit")
    slot_1.innerHTML="0"
    slot_2.innerHTML="0"
    slot_3.innerHTML="0"}
    function update_casino_money(){var money=document.getElementById("casino_money")
    var money_amount=convert_number(balance)
    money.innerHTML=money_amount}
    function gamble_button_pressed(){var input_value=document.getElementById("gamble_input").value
    if(input_value==""||parseInt(input_value)<=0||parseInt(input_value)>balance||parseInt(input_value)%1!=0){return}
    document.getElementById("gamble_button").style.pointerEvents="none"
    var gambled=parseInt(input_value)
    var slot_1=document.getElementById("slot_1_digit")
    var slot_2=document.getElementById("slot_2_digit")
    var slot_3=document.getElementById("slot_3_digit")
    var message=document.getElementById("gamble_message")
    gamble_message.innerHTML=""
    balance-=gambled
    update_casino_money()
    update_values()
    update_status()
    save_changes()
    skip_save=!0
    var digit_1=Math.floor(Math.random()*7)+1
    var digit_2=Math.floor(Math.random()*7)+1
    var digit_3=Math.floor(Math.random()*7)+1
    var number=""+digit_1+digit_2+digit_3
    var slot_1_interval=setInterval(function(){var num=parseInt(slot_1.innerHTML)
    if(num==9){num=0}else{num ++}
    slot_1.innerHTML=num},10)
    var slot_2_interval=setInterval(function(){var num=parseInt(slot_2.innerHTML)
    if(num==9){num=0}else{num ++}
    slot_2.innerHTML=num},10)
    var slot_3_interval=setInterval(function(){var num=parseInt(slot_3.innerHTML)
    if(num==9){num=0}else{num ++}
    slot_3.innerHTML=num},10)
    setTimeout(function(){slot_1.innerHTML=digit_1
    clearInterval(slot_1_interval)},500)
    setTimeout(function(){slot_2.innerHTML=digit_2
    clearInterval(slot_2_interval)},1000)
    setTimeout(function(){slot_3.innerHTML=digit_3
    clearInterval(slot_3_interval)},1500)
    setTimeout(function(){var digit_1=number[0]
    var digit_2=number[1]
    var digit_3=number[2]
    if(digit_1==digit_2&&digit_2==digit_3&&digit_1!="7"){message.innerHTML="You won 8x your bet!"
    balance+=(gambled*8)
    update_casino_money()
    update_values()
    update_status()}else if(digit_1==digit_2&&digit_2==digit_3&&digit_1=="7"){message.innerHTML="You won the jackpot! You won 25x your bet!"
    balance+=(gambled*25)
    update_casino_money()
    update_values()
    update_status()}else if(digit_1==digit_2&&digit_1!="7"){message.innerHTML="You won 3x your bet!"
    balance+=Math.round(gambled*3)
    update_casino_money()
    update_values()
    update_status()}else if(digit_1==digit_2&&digit_1=="7"){message.innerHTML="You won 8x your bet!"
    balance+=(gambled*8)
    update_casino_money()
    update_values()
    update_status()}else if(digit_2==digit_3&&digit_2!="7"){message.innerHTML="You won 3x your bet!"
    balance+=(gambled*3)
    update_casino_money()
    update_values()
    update_status()}else if(digit_2==digit_3&&digit_2=="7"){message.innerHTML="You won 8x your bet!"
    balance+=(gambled*8)
    update_casino_money()
    update_values()
    update_status()}else if(digit_1==digit_3&&digit_2!="7"){message.innerHTML="You won 3x your bet!"
    balance+=(gambled*3)
    update_casino_money()
    update_values()
    update_status()}else if(digit_1==digit_3&&digit_1=="7"){message.innerHTML="You won 8x your bet!"
    balance+=(gambled*8)
    update_casino_money()
    update_values()
    update_status()}else{message.innerHTML="You lost! Better luck next time!"
    update_values()
    update_status()}},2000)
    setTimeout(function(){document.getElementById("gamble_button").style.pointerEvents="auto"},4000)}
    function casino_back_clicked(){document.getElementById("casino_area").style.display="none"
    document.getElementById("casino_back").style.display="none"
    document.getElementById("content_area").style.display="block"
    document.getElementById("gamble_message").innerHTML=""}
    function display_upgrades_info(){var upgrades=Object.keys(upgrade_details)
    for(var upgrade_num=0;upgrade_num<upgrades.length;upgrade_num ++){var upgrade=upgrades[upgrade_num]
    var upgrade_button=document.getElementById(upgrade+"_buy")
    var cost_text=document.getElementById(upgrade+"_cost")
    var button_text=document.getElementById(upgrade+"_inbutton")
    var upgrade_info=upgrade_details[upgrade]
    var upgrade_levels=upgrade_info.levels
    var upgrade_costs=upgrade_info.costs
    var upgrades_bought=upgrade_info.bought
    for(var level_num=1;level_num<upgrade_levels+1;level_num ++){if(upgrades_bought[level_num]==!1){var current_upgrade=level_num
    var current_cost=upgrade_costs[level_num-1]
    break}
    var current_upgrade=!1
    var current_cost=!1}
    if(current_upgrade&&current_cost){var converted_cost=convert_number(current_cost)
    cost_text.innerHTML=converted_cost
    if(balance>=current_cost){button_text.innerHTML="Buy"
    button_text.style="font-size: 15px;"
    upgrade_button.style="pointer-events: auto;"}else{button_text.innerHTML="CANNOT<br>AFFORD"
    button_text.style="font-size: 10px;"
    upgrade_button.style="pointer-events: none;"}}else{cost_text.innerHTML="NONE"
    button_text.innerHTML="ALL<br>BOUGHT"
    button_text.style="font-size: 10px;"
    upgrade_button.style="pointer-events: none;"}}}
    function upgrades_buy_clicked(button){var upgrade=button.parentNode.id
    if(upgrade=="income_boost"){var upgrade_info=upgrade_details.income_boost
    var upgrade_costs=upgrade_info.costs
    var upgrades_bought=upgrade_info.bought
    for(var level_num=1;level_num<upgrade_details.income_boost.levels+1;level_num ++){if(upgrades_bought[level_num]==!1){var bought_cost=upgrade_costs[level_num-1]
    if(bought_cost>balance){return}
    upgrade_details.income_boost.bought[level_num]=!0
    break}}}else if(upgrade=="bonus_clicks"){var upgrade_info=upgrade_details.bonus_clicks
    var upgrade_costs=upgrade_info.costs
    var upgrades_bought=upgrade_info.bought
    for(var level_num=1;level_num<upgrade_details.bonus_clicks.levels+1;level_num ++){if(upgrades_bought[level_num]==!1){var bought_cost=upgrade_costs[level_num-1]
    if(bought_cost>balance){return}
    upgrade_details.bonus_clicks.bought[level_num]=!0
    break}}}
    balance-=bought_cost
    update_normal_status()
    income=calculate_income()
    update_values()
    display_upgrades_info()}
    function earn_button_clicked(){balance+=income;var bonus_clicks_rate=calculate_bonus_click_rate()
    bonus_clicks+=bonus_clicks_rate
    bonus_clicks=Math.round(bonus_clicks*10)/10
    update_status()
    update_values()}
    function update_values(){var income_element=document.getElementById("moneyscreen_income")
    var money_element=document.getElementById("moneyscreen_money")
    var num_bonus_clicks=document.getElementById("amount_bonus_clicks")
    var bonus_clicks_gain=document.getElementById("bonus_click_rate")
    income=calculate_income()
    bonus_click_rate=calculate_bonus_click_rate()
    var converted_income=convert_number(income)
    var converted_balance=convert_number(balance)
    income_element.innerHTML=converted_income
    money_element.innerHTML=converted_balance
    num_bonus_clicks.innerHTML=bonus_clicks
    bonus_clicks_gain.innerHTML="(+ "+bonus_click_rate+" / click)"}
    function update_status(){update_normal_status()
    update_special_status()}
    function update_normal_status(){var status=document.getElementById("status")
    if(items[23]){status.innerHTML="You have finally completed your quest; you own the planet Earth!"}else if(balance>=1000000000000000){status.innerHTML="Aliens from other galaxies have invited you to speak to them about your wealth."}else if(balance>=500000000000000){status.innerHTML="You are so wealthy that your money no longer fits on Earth!"}else if(balance>=50000000000000){status.innerHTML="The governments of major countries are asking you for donations to pay off their debts."}else if(balance>=5000000000000){status.innerHTML="You have so much money conspiracy theorists think you are actually God in disguise."}else if(balance>=1000000000000){status.innerHTML="You are so rich that you have 1% of the total US Dollars in circulation!"}else if(balance>=250000000000){status.innerHTML="You have more than the value of all the gold in Fort Knox."}else if(balance>=100000000000){status.innerHTML="You were on the front cover of TIME MAGAZINE for being the richest person alive!"}else if(balance>=25000000000){status.innerHTML="Rumors suggest Elon Musk is trying to figure out the secrets of your wealth."}else if(balance>=3000000000){status.innerHTML="You are wealthier than Donald Trump."}else if(balance>=1000000000){status.innerHTML="You are now one of the 2,208 billionares in the world!"}else if(balance>=250000000){status.innerHTML="Business analysts have already written numerous articles about you and your wealth."}else if(balance>=100000000){status.innerHTML="You have been appointed the CEO of Money Inc, a company soley dedicated to advertising your wealth!"}else if(balance>=50000000){status.innerHTML="Your influence has caused the stock market to rise 5% in a week!"}else if(balance>=10000000){status.innerHTML="Various universities have invited you to give economics lectures about how you became so rich."}else if(balance>=5000000){status.innerHTML="Foreign diplomats are meeting with you to see if you can help them make their countries more financially efficient!"}else if(balance>=1000000){status.innerHTML="You have been asked to give classes on making money so that others may learn your ways."}else if(balance>=500000){status.innerHTML="You are now in the top 1% of the everyone in the world by wealth."}else if(balance>=250000){status.innerHTML="You are known in your community as 'The Money Man.'"}else if(balance>=100000){status.innerHTML="People in your city are now coming to you asking for funding for their companies."}else if(balance>=50000){status.innerHTML="You are no longer below average wealth!"}else if(balance>=9000){status.innerHTML="Your money is OVER 9000!"}else if(balance>=5000){status.innerHTML="You no longer qualify as low income."}else if(balance>=1000){status.innerHTML="You are famous in your neighborhood for your rapid gain of wealth."}else if(balance>=250){status.innerHTML="You are no longer considered food insecure!"}else if(balance>=50){status.innerHTML="You are very poor, but you are now above the poverty line!"}else if(balance>0){status.innerHTML="You are extremely poor."}else if(balance==0){status.innerHTML="You are broke!"}else{status.innerHTML="You are so poor that you literally have a negative amount of money. Stop cheating :^)"}}
    function update_special_status(){can_list=[]
    for(var item=0;item<24;item ++){if(items[item]==!1&&balance>=item_details[item][2]*3){can_list.push(item)}else if(item==23&&items[item]==!1&&balance>=item_details[item][2]){can_list.push(item)}}
    can_list=can_list.sort((a,b)=>a-b)
    if(can_list.length==0){document.getElementById("buy_area").style.display="none"}
    for(var item_num=0;item_num<can_list.length;item_num ++){var buy_div=document.getElementById("buy_area")
    var special_status=document.getElementById("buy_status")
    var item=can_list[item_num]
    var item_status=get_special_status(item)
    buy_div.style.display="block"
    special_status.innerHTML=item_status
    active_buyitem=item}}
    function get_special_status(item){if(item==1){return"You can afford a water bottle! ($10) (Income + 100)"}else if(item==2){return"You can afford a backpack! ($50) (Income + 100)"}else if(item==3){return"You can afford a cart to carry your possessions! ($100) (Income + 1)00"}else if(item==4){return"You can afford a brand new bicycle! ($200) (Income + 200)"}else if(item==5){return"You can afford a new smartphone! ($750) (Income + 300)"}else if(item==6){return"You can afford a new gaming laptop! ($2,000) (Income + 300)"}else if(item==7){return"You can afford a large plasma TV! ($5,000) (Income + 500)"}else if(item==8){return"You can afford a good motorcycle! ($15,000) (Income + 1,000)"}else if(item==9){return"You can afford a brand new car! ($35,000) (Income + 1,500)"}else if(item==10){return"You can afford a new luxury car! ($100,000) (Income + 2,000)"}else if(item==11){return"You can afford an apartment in Manhattan! ($300,000) (Income + 5,000)"}else if(item==12){return"You can afford a house! ($1,000,000) (Income + 25,000)"}else if(item==13){return"You can afford a giant mansion! ($10,000,000) (Income + 100,000)"}else if(item==14){return"You can afford a rocket! ($100,000,000) (Income + 300,000)"}else if(item==15){return"You can afford a space shuttle! ($1,000,000,000) (Income + 500,000)"}else if(item==16){return"You can afford the Saturn V rocket! ($5,000,000,000) (Income + 1000,000)"}else if(item==17){return"You can afford to go to the moon! ($25,000,000,000) (Income + 10,000,000)"}else if(item==18){return"You afford to buy McDonald's! ($100,000,000,000) (Income + 100,000,000)"}else if(item==19){return"You can afford to buy Apple! ($1,000,000,000,000) (Income + 1,000,000,000)"}else if(item==20){return"You can afford to buy every company on the Fortune 500! ($20,000,000,000,000) (Income + 5,000,000,000)"}else if(item==21){return"You can afford to buy the entire United States! ($200,000,000,000,000) (Income + 100,000,000,000)"}else if(item==22){return"You can afford to buy everything in the entire world! ($1,000,000,000,000,000) (Income + 1,000,000,000,000)"}else if(item==23){return"You afford to buy the planet Earth! ($100,000,000,000,000,000) (Income + 10,000,000,000,000,000,000)"}else{return"ERROR: Invalid item!"}}
    function buy_button_clicked(){var more_items=!1
    if(active_buyitem=="none"){var special_status=document.getElementById("buy_status")
    special_status.innerHTML="ERROR: Invalid! Either you are cheating, or something went wrong..."}else{if(item_details[active_buyitem][2]>balance){return}
    items[active_buyitem]=!0
    income=calculate_income()
    balance-=item_details[active_buyitem][2]
    update_normal_status()
    update_values()
    for(var item=1;item<active_buyitem;item ++){if(items[item]==!1){more_items=!0}}
    if(!more_items){active_buyitem="none"
    var buy_div=document.getElementById("buy_area")
    buy_div.style.display="none"}else{update_special_status()}}}
    function change_opacity(counter){var intro_div=document.getElementById("intro_screen")
    var popup_contents=document.getElementById("popup_contents")
    var intro_opacity=1-(counter/100)
    var popup_opacity=counter/100
    intro_opacity=parseFloat(intro_opacity.toFixed(2))
    intro_div.style.opacity=intro_opacity
    popup_contents.style.opacity=popup_opacity}
    get_data()
    document.addEventListener("DOMContentLoaded",function(){var loading_interval=setInterval(function(){if(typeof(balance)!="undefined"&&typeof(bonus_clicks)!="undefined"&&items&&decimal_digits&&upgrade_details&&typeof(prestige_points)!="undefined"){chrome.runtime.requestUpdateCheck(function(result){console.log(`UPDATE CHECK: ${result}`)})
    clearInterval(loading_interval)
    if(upgrade_details.bonus_clicks.levels==36){upgrade_details.bonus_clicks.levels=50
    for(var i=37;i<51;i ++){upgrade_details.bonus_clicks.bought[i]=!1}
    upgrade_details.bonus_clicks.costs=[1000/2,10000/2,50000/2,100000/2,500000/2,1000000/2,1500000/2,2000000/2,2500000/2,3000000/2,3500000/2,4000000/2,4500000/2,5000000/2,7500000/2,10000000/2,15000000/2,20000000/2,25000000/2,30000000/2,35000000/2,40000000/2,45000000/2,50000000/2,75000000/2,100000000/2,150000000/2,200000000/2,250000000/2,300000000/2,350000000/2,400000000/2,450000000/2,500000000/2,750000000/2,1000000000/2,1500000000/2,2000000000/2,2500000000/2,3000000000/2,3500000000/2,4000000000/2,4500000000/2,5000000000/2,7500000000/2,10000000000/2,100000000000/2,1000000000000/2,10000000000000/2,100000000000000/2]}else if(upgrade_details.bonus_clicks.levels==46){upgrade_details.bonus_clicks.levels=50
    for(var i=47;i<51;i ++){upgrade_details.bonus_clicks.bought[i]=!1}
    upgrade_details.bonus_clicks.costs=[1000/2,10000/2,50000/2,100000/2,500000/2,1000000/2,1500000/2,2000000/2,2500000/2,3000000/2,3500000/2,4000000/2,4500000/2,5000000/2,7500000/2,10000000/2,15000000/2,20000000/2,25000000/2,30000000/2,35000000/2,40000000/2,45000000/2,50000000/2,75000000/2,100000000/2,150000000/2,200000000/2,250000000/2,300000000/2,350000000/2,400000000/2,450000000/2,500000000/2,750000000/2,1000000000/2,1500000000/2,2000000000/2,2500000000/2,3000000000/2,3500000000/2,4000000000/2,4500000000/2,5000000000/2,7500000000/2,10000000000/2,100000000000/2,1000000000000/2,10000000000000/2,100000000000000/2]}
    if(!upgrade_details.bonus_clicks.bought.hasOwnProperty(37)){for(var i=37;i<50;i ++){upgrade_details.bonus_clicks.bought[i]=!1}}
    if(Object.keys(items).length==22){items[23]=items[22]
    items[22]=items[21]
    items[21]=items[20]
    items[20]=items[19]
    items[19]=items[18]
    items[18]=items[17]
    items[17]=items[16]
    items[16]=items[15]
    items[15]=!1}
    var money_button=document.getElementById("money_switch")
    money_button.style.border="0.5px solid #000000"
    money_button.style.borderBottom="none"
    money_button.style.background="#FFFFFF"
    var settings_button=document.getElementById("settings_button")
    settings_button.addEventListener("click",settings_button_clicked)
    var settings_back_button=document.getElementById("settings_back")
    settings_back_button.addEventListener("click",settings_back_clicked)
    var prestige_button=document.getElementById("prestige_button")
    prestige_button.addEventListener("click",prestige_button_clicked)
    var do_prestige_button=document.getElementById("do_prestige_button")
    do_prestige_button.addEventListener("click",function(event){if((event.screenX==0&&event.screenY==0&&event.clientX==0&&event.clientY==0)||!event.isTrusted){event.preventDefault()}else{prestige()}})
    var prestige_back_button=document.getElementById("prestige_back")
    prestige_back_button.addEventListener("click",prestige_back_clicked)
    var casino_button=document.getElementById("casino_button")
    casino_button.addEventListener("click",casino_button_clicked)
    var gamble_button=document.getElementById("gamble_button")
    gamble_button.addEventListener("click",function(event){if(event.isTrusted==!1||(event.screenX==0&&event.screenY==0&&event.clientX==0&&event.clientY==0)){event.preventDefault()}else{gamble_button_pressed()}})
    var casino_back_button=document.getElementById("casino_back")
    casino_back_button.addEventListener("click",casino_back_clicked)
    var switch_buttons=document.getElementsByClassName("switchButton")
    for(var button_num=0;button_num<5;button_num ++){var button=switch_buttons[button_num]
    var type=button.id.substr(0,button.id.indexOf("_"))
    add_switch_listener(switch_buttons,button,type)}
    income=calculate_income()
    update_values()
    update_status()
    var digits_slider=document.getElementById("decimal_slider")
    digits_slider.value=decimal_digits
    if(decimal_digits==2){document.getElementById("settings_digits_2").style.opacity=1.0
    document.getElementById("settings_digits_3").style.opacity=0.5
    document.getElementById("settings_digits_4").style.opacity=0.5}else if(decimal_digits==3){document.getElementById("settings_digits_2").style.opacity=0.5
    document.getElementById("settings_digits_3").style.opacity=1.0
    document.getElementById("settings_digits_4").style.opacity=0.5}else if(decimal_digits==4){document.getElementById("settings_digits_2").style.opacity=0.5
    document.getElementById("settings_digits_3").style.opacity=0.5
    document.getElementById("settings_digits_4").style.opacity=1.0}
    digits_slider.oninput=function(){decimal_digits=this.value
    if(decimal_digits==2){document.getElementById("settings_digits_2").style.opacity=1.0
    document.getElementById("settings_digits_3").style.opacity=0.5
    document.getElementById("settings_digits_4").style.opacity=0.5}else if(decimal_digits==3){document.getElementById("settings_digits_2").style.opacity=0.5
    document.getElementById("settings_digits_3").style.opacity=1.0
    document.getElementById("settings_digits_4").style.opacity=0.5}else if(decimal_digits==4){document.getElementById("settings_digits_2").style.opacity=0.5
    document.getElementById("settings_digits_3").style.opacity=0.5
    document.getElementById("settings_digits_4").style.opacity=1.0}
    update_values()}
    var earn_button=document.getElementById("earn_button")
    earn_button.addEventListener("click",function(event){if(!event.isTrusted){console.log("stop cheating :^) \n use enter button instead (click once on button and hold enter)")
    event.preventDefault()}else{earn_button_clicked()}})
    var bonus_clicks_use=document.getElementById("bonus_clicks_use")
    bonus_clicks_use.addEventListener("click",function(){var consumed=Math.floor(bonus_clicks)
    bonus_clicks-=consumed
    bonus_clicks=Math.round(bonus_clicks*10)/10
    balance+=consumed*income
    update_values()
    update_status()})
    var buy_button=document.getElementById("buy_button")
    buy_button.addEventListener("click",function(event){if(event.screenX==0&&event.screenY==0&&event.clientX==0&&event.clientY==0){event.preventDefault()}else if(!event.isTrusted){console.log("stop cheating :^)")
    event.preventDefault()}else{buy_button_clicked()}})
    var income_back=document.getElementById("income_back")
    var income_next=document.getElementById("income_next")
    income_back.addEventListener("click",income_back_clicked)
    income_next.addEventListener("click",income_next_clicked)
    document.querySelectorAll(".upgradeBuy").forEach(function(button){button.addEventListener("click",function(event){if(event.screenX==0&&event.screenY==0&&event.clientX==0&&event.clientY==0){event.preventDefault()}else{upgrades_buy_clicked(button)}})})
    var updates_back=document.getElementById("updates_back")
    var updates_next=document.getElementById("updates_next")
    updates_back.addEventListener("click",updates_back_clicked)
    updates_next.addEventListener("click",updates_next_clicked)
    var help_back=document.getElementById("help_back")
    var help_next=document.getElementById("help_next")
    help_back.addEventListener("click",help_back_clicked)
    help_next.addEventListener("click",help_next_clicked)
    setInterval(function(){if(skip_save){skip_save=!1}else{save_changes()}},5000)
    window.onblur=function(){save_changes()}
    setTimeout(function(){var counter=0
    var opacity_interval=setInterval(function(){counter ++
    change_opacity(counter)
    if(counter==100){clearInterval(opacity_interval)
    document.getElementById("popup_contents").style.pointerEvents="auto"}},6)},700)}},50)})})()