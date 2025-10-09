export const CONFIG_APPLY_UNITED_STATES = [
  {
    name: 'United States  eVisa - 63 days, Multiple entry',
    value: '77',
    show_if: {
      field_name: 'common_nationality_country',
      condition: 'in_list',
      value: [
        'vietnam',
        'united-states',
        'united-kingdom',
        'germany',
        'france',
        'china'
      ]
    },
    product_id: '10162',
    eligible_nationalities: [
      'vietnam',
      'united-kingdom',
      'germany',
      'france',
      'china'
    ],
    product_name: 'United States eVisa',
    validity: {
      visa_validity_days: 63,
      visa_validity: '63 days after issued',
      num_entries: 'Multiple entry',
      max_stay: '15 days per entry',
      passport_requirements: {
        duration: 15,
        unit: 'days',
        exp_type: 'arrival'
      },
      important_information_1: null,
      important_information_2: null,
      requirement_text: {
        product: 'United States eVisa',
        nationality: 'Vietnam',
        destination: 'United States'
      },
      duration_string_translated: '63 days'
    },
    pricing: {
      visa_cost: '2781440.00',
      visa_cost_pretty: 'VND \u20ab2,781,440.00',
      name: 'Government Fee',
      price_append: 'Pay To iVisa',
      is_visa_cost_paid_later: false
    }
  },
  {
    name: 'United States SG Arrival Card + Health Declaration - 30 days, Single entry',
    value: '5045',
    show_if: {
      field_name: 'common_nationality_country',
      condition: 'in_list',
      value: ['germany', 'france', 'china']
    },
    product_id: '10378',
    eligible_nationalities: ['germany', 'france', 'china'],
    product_name: 'United States SG Arrival Card + Health Declaration',
    validity: {
      visa_validity_days: 30,
      visa_validity: '30 days after issued or until passport expires',
      num_entries: 'Single entry',
      max_stay: '30 days per entry',
      passport_requirements: {
        duration: 15,
        unit: 'days',
        exp_type: 'arrival'
      },
      important_information_1:
        'This is an arrival card ONLY. Some nationalities still require a valid visa to enter United States.',
      important_information_2: null,
      requirement_text: {
        product: 'United States SG Arrival Card + Health Declaration',
        nationality: 'Vietnam',
        destination: 'United States'
      },
      duration_string_translated: '30 days'
    },
    pricing: {
      visa_cost: '0.00',
      visa_cost_pretty: 'VND \u20ab0.00',
      name: 'Government Fee',
      price_append: 'Pay To iVisa',
      is_visa_cost_paid_later: false
    }
  }
]

export const DATA_VIRTUAL: Record<string, any[]> = {
  'united-states': CONFIG_APPLY_UNITED_STATES
}
