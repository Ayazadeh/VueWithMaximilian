# import datetime
# from time import sleep
#
#
# class ProcessTimer:
#     def __enter__(self):
#         self.__enter_time = datetime.datetime.now()
#
#     def __exit__(self, exc_type, exc_val, exc_tb):
#         if exc_tb:
#             print(f">> Error {exc_type=}: {exc_val=}")
#         else:
#             self.__exit_time = datetime.datetime.now()
#         return True
#
#     @property
#     def elapsed_time(self):
#         return self.__exit_time - self.__enter_time
#
#
# p_timer = ProcessTimer()
# with p_timer:
#     sleep(2)
# print(p_timer.elapsed_time)

