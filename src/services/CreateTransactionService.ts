import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Request {
  title: string;

  value: number;

  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: Request): Transaction {
    const trasaction = new Transaction({ type, value, title });

    if (type !== 'income' && type !== 'outcome') {
      throw Error('Type is not valid.');
    }

    this.transactionsRepository.create({
      title,
      value,
      type,
    });

    return trasaction;
  }
}

export default CreateTransactionService;
