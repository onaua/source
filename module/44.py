import logging
import colorlog
import mymodule.myfunctions

log_colors_config = {
    'DEBUG': 'white',  # cyan white
    'INFO': 'green',
    'WARNING': 'yellow',
    'ERROR': 'red',
    'CRITICAL': 'bold_red',
}

formatstr='[%(asctime)s %(levelname)s]%(name)s>>%(module)s>>"%(funcName)s">>%(lineno)d-%(process)d-%(threadName)s-%(thread)d>>>%(message)s'
        
logger = logging.getLogger('logger_name')
console_handler = logging.StreamHandler()
file_handler = logging.FileHandler(filename='test.log', mode='a', encoding='utf8')
file_formatter = logging.Formatter(
    fmt='[%(asctime)s.%(msecs)03d] %(filename)s -> %(funcName)s line:%(lineno)d [%(levelname)s] : %(message)s',
    datefmt='%Y-%m-%d  %H:%M:%S'
)
console_formatter = colorlog.ColoredFormatter(
    fmt='%(log_color)s[%(asctime)s.%(msecs)03d] %(filename)s -> %(funcName)s line:%(lineno)d [%(levelname)s] : %(message)s',
    datefmt='%Y-%m-%d  %H:%M:%S',
    log_colors=log_colors_config
)
console_handler.setFormatter(console_formatter)
file_handler.setFormatter(file_formatter)
# 重复日志问题：
# 1、防止多次addHandler；
# 2、loggername 保证每次添加的时候不一样；
# 3、显示完log之后调用removeHandler
if not logger.handlers:
    logger.addHandler(console_handler)
    logger.addHandler(file_handler)
console_handler.close()
file_handler.close()
# 日志级别，logger 和 handler以最高级别为准，不同handler之间可以不一样，不相互影响
logger.setLevel(logging.DEBUG)
console_handler.setLevel(logging.DEBUG)
file_handler.setLevel(logging.INFO)

if __name__ == '__maiyn__':
    logger.debug('debug')
    logger.info('info')
    logger.warning('warning')
    logger.error('error')
    logger.critical('critical')
b=['2', '9', ' ', ' ', ' ', '1', '5', ' ', ' ', ' ', '3', '7', ' ', ' ', ' ', '2', '0', ' ', ' ', ' ', '5', '0']
b.append(' ')
b.append('0')
new=[]
te=[]
entered=True
for i in b:
    try:
        try:
            i=int(i)
        except:
            i=float(i)
    except ValueError:
        entered=False
    else:
        if not entered:
            if te:
                new.append(''.join(te))
                te.clear() 
        if isinstance(i,int) or isinstance(i,float):
            print(i)
            te.append(str(i))
            entered=True

print(new)
print(b)