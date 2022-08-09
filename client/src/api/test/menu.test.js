import {getMeals} from '../menu'; 

  describe('test for getMeals', () => {

    it('gets all meals', async () => { 
          const meals = await getMeals('all', 'all', false, false); 
          expect(meals).toBeTruthy(); 
          expect(meals).not.toBe([]);         
      }
        )   

    it('returns results when type is specified', async () => { 
          const meals = await getMeals('starter', 'all', false, false); 
          expect(meals).toBeTruthy(); 
          expect(meals).not.toBe([]);         
      }
        ) 
        
      it('returns results when region is specified', async () => { 
          const meals = await getMeals('all', 'chinese', false, false); 
          expect(meals).toBeTruthy(); 
          expect(meals).not.toBe([]);         
      }
        )     

      it('returns results when type and region is specified', async () => { 
          const meals = await getMeals('starter', 'chinese', false, false); 
          expect(meals).toBeTruthy(); 
          expect(meals).not.toBe([]);         
      }
        )     

        it('returns results when vegetarian is true', async () => { 
          const meals = await getMeals('all', 'all', true, false); 
          expect(meals).toBeTruthy(); 
          expect(meals).not.toBe([]);         
      }
        )          
     
        it('returns results when type is specified and vegetarian is true', async () => { 
          const meals = await getMeals('starter', 'all', true, false); 
          expect(meals).toBeTruthy(); 
          expect(meals).not.toBe([]);         
      }
        ) 

      it('returns results when vegan is true', async () => { 
          const meals = await getMeals('all', 'all', false, true); 
          expect(meals).toBeTruthy(); 
          expect(meals).not.toBe([]);         
      }
        )       

        it('returns results when type is specified and vegan is true', async () => { 
          const meals = await getMeals('starter', 'all', false, true); 
          expect(meals).toBeTruthy(); 
          expect(meals).not.toBe([]);         
      }
        ) 


      }); 