import re
import numpy as np
from nltk.stem.porter import *

# TEXT PROCESSING
def text_preprocessing(string):
    def clear_texts(tweet,remove_pattern):
        r = re.findall(remove_pattern,tweet)
        for i in r:
            tweet = re.sub(i,'',tweet)
        return tweet
    
    string = np.vectorize(clear_texts)(np.array(string),"@[\w]*")

    string = str(string).replace("[^a-zA-Z#]"," ")
    string = string.split()

    string = ' '.join([w for w in string if len(w) > 3])

    stemmer = PorterStemmer()
    string = [stemmer.stem(i) for i in string.split()]

    string = " ".join(i for i in string)

    return string
