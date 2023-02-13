import { CodeBlock, dracula } from 'react-code-blocks'
import kide from '../images/KIDE/tg.jpg'
import React from 'react'
import ProjectsNavbar from '../components/ProjectsNavbar'
import Backbutton from '../components/Backbutton'

const KIDE = ({ toggleTheme, theme, projectScrolled }) => {
    const logincode = `def login_OAUTH(driver, email, password):
    loginpath = 'https://auth.kide.app/oauth2/token'
    payload = f'client_id=56d9cbe22a58432b97c287eadda040df&grant_type=password&password={password}&rememberMe=true&username={email}
    resp = driver.post(kirjautuminen, payload)
    try:
        token =f"Bearer {json.loads(resp.content)['access_token']}"
        driver.headers.update({'authorization': token})
    except:
        token = False

    print(f'Login status code: {resp.status_code}')
    if resp.status_code == 200:
        print('Login success')
        login = True
    else:
        print('Login fail')
        login = False

    return login, token`

    const finditemscode = `def find_products(driver, URL):
    product_path = 'https://api.kide.app/api/products/'
    inventoryIds = []
    this_product = f"{product_path}{URL.replace('https://kide.app/events/', '')}"
    
    product_ids = driver.get(this_product)
    for inf in json.loads(product_ids.content)['model']['variants']:
        print('\n-----------------------------------\n')
        variant = inf['inventoryId']
        amount = inf['productVariantMaximumReservableQuantity']
        available = inf['availability']
        print(f'Found a ticket by the ID of: {variant}')
        print(f'Maximum amount of tickets of this variant: {amount}')
        inventoryIds.append(inf['inventoryId'])
        if available < amount:
            amount = available

    return amount, inventoryIds`

    const timecode = `def time_start(driver, URL):
    product_path = 'https://api.kide.app/api/products/'
    this_product = f"{product_path}{URL.replace('https://kide.app/events/', '')}"
    resp = driver.get(this_product)
    time_until_start = json.loads(resp.content)['model']['product']['timeUntilSalesStart']
    print(f'Time until the start of the sale: {time_until_start} seconds')
    return time_until_start`

    return(
        <div>
            <ProjectsNavbar toggleTheme={toggleTheme} theme={theme} projectScrolled={projectScrolled}/>
            <div className='projectdiv'>
                <Backbutton />
                <h3>Kide App ticket bot</h3>
                <p>
                    The tickets for student events are almost always sold on a third-party platform Kide App.
                    Some events sell out in seconds. Some events sell out instantly. I did this project to see if I could automate ticket buying
                    with a bot of some sort myself, as I had seen other people doing it. Perhaps a somewhat unethical, but a good project to learn about web requests, APIs, JSON parsing,
                    and web automation.
                </p>
                <p>
                    The first step was to figure out how to control websites and APIs with requests.
                    After some googling I started trying to login to Kide App website with python requests library.
                    It took some experimenting but eventually I got it. The following code snippet is working login function.
                </p>
                <div className="code">
                    <CodeBlock
                        id="code"
                        language='python'
                        text={logincode}
                        showLineNumbers={true}
                        theme={dracula}
                        wrapLines={true}
                        codeBlock
                    />
                </div>
                <p>
                    Then I faced some difficulties for a moment as I was trying to figure out how to buy a ticket, or at least to find the ticket types and their IDs to buy with POST request.
                    The buying process itself is somewhat simple. Buying happens via sending POST request to Kide App API with all the necessary information like quantity and product ID.
                    The question was, where do I find the product ID? Well, it turned out that GET requesting API path api/events/*event_id* returns JSON response with full event information, including ticket variants and their IDs.
                </p>
                <p>
                    Below is the function I created for finding product IDs and amount of tickets available.
                </p>
                <div className="code">
                    <CodeBlock
                        id="code"
                        language='python'
                        text={finditemscode}
                        showLineNumbers={true}
                        theme={dracula}
                        wrapLines={true}
                        codeBlock
                    />
                </div>
                <p>
                    A complete ticket buying bot still needed two functions, one to time the start of the ticket sales and one to actually buy the tickets.
                    The timing function was simple to implement after finding out that the time until start of the sale is listed in seconds in the same API path as the ticket variants.
                    This functionality allows the user to run the bot before the sales start, letting the bot do its thing when the time comes.
                </p>
                <div className="code">
                    <CodeBlock
                        id="code"
                        language='python'
                        text={timecode}
                        showLineNumbers={true}
                        theme={dracula}
                        wrapLines={true}
                        codeBlock
                    />
                </div>
                <p>
                    The final, ticket buying function was not much more complex either. The trick was to manually buy a ticket and then track the POST request sent to the API and simply copy all the necessary information.
                    After the format of the POST request was clear it was easy to combine the ticket IDs to the request body in order to buy whichever ticket wanted.
                    There was some fine tuning needed with the bot in order to optimize the buying process, but nothing interesting enough.
                    I won't share the code of this function in order to prevent the spreading of botting.
                    The process of nervously waiting for tickets to come to sale is essential part of the event experience in my opinion.
                </p>
                <p>
                    I then created a simple telegram interface to communicate with the bot. The user only needs to send the link to the event, and the bot does the rest.
                </p>
                <img className="KIDEimg" src={kide} alt="tg interface"/>
                <p>
                    This required a bit over 100 lines of code, with nothing extraordinary to show. I then uploaded the telegram hook to a server provided by heroku
                    which allowed 24/7 uptime when needed.
                </p>
                <p>
                    To sum things up, I got everything working as I wanted. I haven't really used the bot after testing it in one of the biggest student event ticket sales and proving its functionality.
                    I later found doing this project helpful when taking the course Web Software Development and working with APIs.
                </p>
                <Backbutton />
            </div>
        </div>
    )
}

export default KIDE