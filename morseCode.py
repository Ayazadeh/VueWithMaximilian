from abc import ABC, abstractmethod


class MorseCode(ABC):
    MORSE_CODE_DICT = {'A': '.-', 'B': '-...',
                       'C': '-.-.', 'D': '-..', 'E': '.',
                       'F': '..-.', 'G': '--.', 'H': '....',
                       'I': '..', 'J': '.---', 'K': '-.-',
                       'L': '.-..', 'M': '--', 'N': '-.',
                       'O': '---', 'P': '.--.', 'Q': '--.-',
                       'R': '.-.', 'S': '...', 'T': '-',
                       'U': '..-', 'V': '...-', 'W': '.--',
                       'X': '-..-', 'Y': '-.--', 'Z': '--..',
                       '1': '.----', '2': '..---', '3': '...--',
                       '4': '....-', '5': '.....', '6': '-....',
                       '7': '--...', '8': '---..', '9': '----.',
                       '0': '-----', '\n': '|', ' ': '/',
                       ',': '--..--', '.': '.-.-.-',
                       '?': '..--..', '/': '-..-.', '-': '-....-',
                       '(': '-.--.', ')': '-.--.-'
                       }

    def __init__(self, data: str) -> None:
        self._data = data
        assert self._check()

    @abstractmethod
    def process(self) -> str:
        """
        tabdil mikne data ro be codinge mord nazar!!!

        """
        pass

    @abstractmethod
    def _check(self) -> bool:
        pass

    def save(self, file_name):
        with open(file_name, 'w') as f:
            f.write(self.process())
        return file_name

    @classmethod
    def from_file(cls, file_path):
        """
        sakhtan yek nemoone ba estefadeh az file!

        """
        with open(file_path) as f:
            data = f.read()
            return cls(data)  # MorseDecoder | MorseEncoder

    def __str__(self):
        return self.process()


class MorseEncoder(MorseCode):

    def process(self) -> str:
        res = ""
        for c in self._data.replace(' ', ' '):
            res += self.MORSE_CODE_DICT[c.upper()] + ' '
        return res

    def _check(self) -> bool:
        return all(
            map(
                lambda s:  s.isascii(),
                self._data.split()
            )
        )


class MorseDecoder(MorseCode):

    def process(self) -> str:
        res = ""
        rev_morse_code_dict = {v: k for k, v in self.MORSE_CODE_DICT.items()}
        for i in self._data.split(' '):
            res += rev_morse_code_dict[i]
        return res

    def _check(self) -> bool:
        list1 = ['.', '-', '/', '|', ' ']
        return all(
            map(
                lambda s: s in list1,
                self._data
            )
        )


m = MorseEncoder('mohammad,ayazadeh')
print(m.process())
n = MorseDecoder('-- --- .... .- -- -- .- -.. --..-- .- -.-- .- --.. .- -.. . ....')
print(n.process())
