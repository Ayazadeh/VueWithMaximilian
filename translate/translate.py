import translators, logging

logging.basicConfig(level=logging.INFO)


class Translate:

    def __init__(self, file_path):
        self.file_path = file_path

    def translate_to(self, lng):
        logging.info('start translate!')
        logging.info('open file!')
        with open(self.file_path) as f:
            s = f.read()
        logging.info('answer is : ')
        return translators.bing(s+'\nmy name is mohammad', to_language=lng)


t1 = Translate('lang.txt')
print(t1.translate_to('fa'))
