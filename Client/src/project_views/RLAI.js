import { CodeBlock, dracula } from 'react-code-blocks'
import yhdet from '../images/RLAI/yhdet.PNG'
import React from 'react'
import ProjectsNavbar from '../components/ProjectsNavbar'
//<img className="RLimg" src={yhdet} alt="2048 game"/>
import Backbutton from '../components/Backbutton'

const RLAI = ({ toggleTheme, theme, projectScrolled }) => {
    const code = `import gym
from gym import spaces

class CustomEnv(gym.Env):
  """Custom Environment that follows gym interface"""
  metadata = {'render.modes': ['human']}

  def __init__(self, arg1, arg2, ...):
    super(CustomEnv, self).__init__()
    # Define action and observation space
    # They must be gym.spaces objects
    # Example when using discrete actions:
    self.action_space = spaces.Discrete(N_DISCRETE_ACTIONS)
    # Example for using image as input:
    self.observation_space = spaces.Box(low=0, high=255,
                                        shape=(HEIGHT, WIDTH, N_CHANNELS), dtype=np.uint8)

  def step(self, action):
    ...
    return observation, reward, done, info
  def reset(self):
    ...
    return observation  # reward, done, info can't be included
  def render(self, mode='human'):
    ...
  def close (self):
    ...
      `
    const code2 = `def _get_image(self):
    game_board_element = self._driver.find_element(By.XPATH, "/html/body/div[2]/div[2]")
    base64_png = game_board_element.screenshot_as_png
    _img = base64_png
    file_bytes = np.asarray(bytearray(base64_png), dtype=np.uint8)
    decoded_image = cv2.imdecode(file_bytes, cv2.IMREAD_COLOR)
    rect = game_board_element.rect
    (x, y, w, h) = (int(rect['x']), int(rect['y']), int(rect['width']), int(rect['height']))
    cropped_image = decoded_image[y:y+h, x:x+w]
    Board = namedtuple('Board', ['x', 'y', 'w', 'h', 'screen'])
    imageStream = io.BytesIO(base64_png)
    #im = Image.open(imageStream)
    #im.save('C:\Koodi\RL_AI\img.png')
    board = Board(x, y, w, h, cropped_image)
    return decoded_image
    return np.array(
        Image.open(BytesIO(base64.b64decode(_img)))
    )

def _next_observation(self):
    image = cv2.cvtColor(self._get_image(), cv2.COLOR_BGR2GRAY)
    image = cv2.resize(image, (self.screen_width, self.screen_height))
    self.num_observation += 1
    self.state_queue.append(image)

    if len(self.state_queue) < 4:
        return np.stack([image] * 4, axis=-1)
    else:
        return np.stack(self.state_queue, axis=-1)`
    
    const code3 = `def _next_observation(self):
    grid2 = np.zeros((4,4)) 
    parent = self._driver.find_element(By.XPATH, '/html/body/div[2]/div[2]/div[6]')
    children = parent.find_elements(By.XPATH, "*")
    for child in children:
        try:
            info = child.get_attribute("class")
            grid2[int(info[28])-1][int(info[26])-1] = child.text
        except:
            pass

    return grid2`

    return(
        <div>
            <ProjectsNavbar toggleTheme={toggleTheme} theme={theme} projectScrolled={projectScrolled}/>
            <div className='projectdiv'>
                <Backbutton />
                <h3>Reinforcement learning experiment on browser game</h3>
                <h4 className="documentation_subtitle">Introduction</h4>
                <p>
                    One afternoon my friends were playing this random browser game.
                    The game seemed very simple. Its goal was to combine same value tiles together creating higher value tiles while gaining higher score by doing so.
                    There were only four possible input actions: up, down, left, right.
                </p>
                <p>
                    The limited game board size (4x4 grid) and the limited amount of actions
                    made me question if the game had any actual depth to it and if a simple algorithm could beat
                    just about any normal person. So, I decided to test a simple algorithm that would pile the tiles into one corner.
                    I implemented quick python-based Selenium browser instance to press arrow keys in the order as explained before.
                    The game turned out to be more difficult than what I initially expected as I found my algorithm failing to gather any points shortly after starting to play.
                </p>
                <p>
                    After having no success with simple algorithm consisting of about 70 lines of code, I decided to start experimenting with reinforcement learning.
                </p>
                <p>
                    I had no experience on how to create a RL model or how to train it.
                    I had vague understanding about the basic principles behind the process, but I needed to learn more, so I did some research.
                </p>
                <p>
                    After learning more, I looked into different options to train my model with. I decided to use a library dedicated to reinforcement learning with what seemed like intuitive environment.
                    The library in question was <a className="link_in_text" href="https://github.com/DLR-RM/stable-baselines3" target="_blank" rel="noopener noreferrer"> stable-baselines</a>.
                    In short, stable-baselines is an improved implementation on <a className="link_in_text" href="https://github.com/openai/baselines" target="_blank" rel="noopener noreferrer"> OpenAI Baselines </a> set of algorithms.
                    It offers few different algorithms to use. The main draw for me, however, was the high quality documentation and the helpful example snippets offered by the said library.
                    I read the documentations of two different algorithms and decided that I was not qualified to compare them. Therefore, I chose what seemed to be the most popular algorihm (PPO) and moved onto the coding.
                </p>
                <h4 className="documentation_subtitle">Programming</h4>
                <p>
                    The first step of the programming process consisted of following the <a className="link_in_text" href="https://stable-baselines.readthedocs.io/en/master/guide/custom_env.html" target="_blank" rel="noopener noreferrer">documentation </a>
                    about custom environments in stable-baselines.
                </p>
                <div className="code">
                    <CodeBlock
                        id="code"
                        language='python'
                        text={code}
                        showLineNumbers={true}
                        theme={dracula}
                        wrapLines={true}
                        codeBlock
                    />
                </div>
                <p>I used the code snippet above as the layout where I added my own functions tailored to suit the game environment and Selenium browser running and observing the game state.</p>
                <p>
                    There were two ways I could think of to observe the game: 1) taking a screenshot after every move 2) parsing the html source code for the game grid after every move.
                    At first I implemented the screenshot-taking method where functions _get_image and _next_observation were defined as below.
                </p>

                <div className="code">
                    <CodeBlock
                        id="code"
                        language='python'
                        text={code2}
                        showLineNumbers={true}
                        theme={dracula}
                        wrapLines={true}
                        codeBlock
                    />
                </div>

                <p>
                The results were somewhat okay for the first try but the Selenium browser had an annoying "feature" where the screen flickers with each screenshot.
                    I couldn't find any way to turn the flickering off, so instead I decided to try the second method.
                </p>
                <div className="code">
                    <CodeBlock
                        id="code"
                        language='python'
                        text={code3}
                        showLineNumbers={true}
                        theme={dracula}
                        wrapLines={true}
                        codeBlock
                    />
                </div>
                <p>
                    While the lines of code needed for this approach is significantly lower, the performance of the training process took noticeable hit.
                    This, I think, must have been caused by the for-loop and the element-finding method. Taking a screenshot is much simpler process in the observation step, and as I understand it, the RL-algorithm used here isn't affected by the size of the observation grid (4x4 vs the screenshot size).
                </p>
                <h1 className="unfinished">To be continued...</h1>
                <Backbutton />
            </div>
        </div>
    )
}

export default RLAI