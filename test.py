from soynlp.noun import LRNounExtractor_v2
from soynlp.utils import DoublespaceLineCorpus
import json
data_file = open("intents.json").read()
intents = json.loads(data_file)


corpus_path = '2016-10-20.txt'
sents = DoublespaceLineCorpus(corpus_path, iter_sent=True)

# sent = []
# for intent in intents["intents"]:
#     for res in intent["responses"]:
#         sent.extend(res)


noun_extractor = LRNounExtractor_v2(verbose=True)
nouns = noun_extractor.train_extract(sents)

print(nouns)